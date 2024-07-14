import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import web from '../../../routes/web.jsx';
import { Suspense, lazy } from 'react'
import SuspenseContent from "./SuspenseContent"
import { useSelector } from 'react-redux'
import { useEffect, useRef } from "react"

const Page404 = lazy(() => import('../../protected/404.jsx'));


function PageContent(){
    const mainContentRef = useRef(null);
    const {pageTitle} = useSelector(state => state.header)


    // Scroll back to top on new page load
    useEffect(() => {
        mainContentRef.current.scroll({
            top: 0,
            behavior: "smooth"
          });
      }, [pageTitle])

    return(
        <div className="drawer-content flex flex-col">
            <Navbar/>
            <main className="flex-1 overflow-y-auto" ref={mainContentRef}>
                <Suspense fallback={<SuspenseContent />}>
                        <Routes>
                            {
                                web.map((route, key) => {
                                    return(
                                        <Route
                                            key={key}
                                            exact={true}
                                            path={`${route.path}`}
                                            element={<route.component />}
                                        />
                                    )
                                })
                            }

                            <Route path="*" element={<Page404 />} />
                        </Routes>
                </Suspense>
                <div className="h-16"></div>
            </main>
            <Footer/>
        </div> 
    )
}


export default PageContent
