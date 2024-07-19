import React, { useEffect, useState } from 'react'
import "./Plans.css"
import { addDoc, collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Plans = () => {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);
    const [subscription, setSubscription] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            const q = query(collection(db,"customers", user.uid,"subscriptions"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc)=>{
                setSubscription({
                    role: doc.data().role,
                    current_period_end: doc.data().current_period_end.seconds,
                    current_period_start: doc.data().current_period_start.seconds,
                });
            });
        };
        fetchData()
    },[user.uid])

    useEffect(()=> {
        const fetchData = async () => {
            const q = query(collection(db,"products"),where("active",'==',true));

            const querySnapshot = await getDocs(q);
            const products = {};

            querySnapshot.forEach(async(doc)=>{
                products[doc.id] = doc.data()

                const priceQuery = query(collection(doc.ref,"prices"));
                const priceSnap = await getDocs(priceQuery);

                priceSnap.docs.forEach((priceDoc)=>{
                    products[doc.id].prices ={
                        priceId : priceDoc.id,
                        priceData : priceDoc.data()
                    }
                })
            })
            setProducts(products);
        };
        fetchData();
    },[])
    console.log(products);

    const loadCheckout = async(priceId) =>{
        const docRef = await addDoc(collection(db, "customers", user.uid,"checkout_sessions"),{
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin
        })

        onSnapshot(docRef,async(snapShot)=>{
            const {error, sessionId} = snapShot.data();
            if(error){
                alert(`An error occured : ${error.message}`)
            }
            if(sessionId){
                const stripe = await loadStripe("pk_test_51PdtZfRvcOUKnij8KgxCqMKAQTYQlHqQMw6JFXnMmhlCGyeXM100DPlq5QxwqmFtvmf2XBXnRsoGyYZ3Y0DdH9bp00YOWbQX0I");
                stripe.redirectToCheckout({sessionId})
            }
        })
    }
  return (
    <div className='plans'>
        <br />
           { subscription && (
                <p>
                    Renewal Date: {new Date(subscription?.current_period_end*1000).toLocaleDateString()}
                </p>
            )}
        {
            Object.entries(products).map(([productId, productData])=>{
                const isCurrentPackage =productData.name?.toLowerCase().includes(subscription?.role);
                return (
                    <div key={productId} className={`${ isCurrentPackage && "planScreen__plan--disabled"} planScreen__plan`}>
                        <div className='planScreen__info'>
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={()=> !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
                            {isCurrentPackage ? "Current Package" : "Subscribe"}
                        </button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Plans