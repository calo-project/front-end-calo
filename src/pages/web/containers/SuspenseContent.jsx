import { React } from 'react';

function SuspenseContent(){
    return(
        <div className="w-full h-screen text-gray-300 dark:text-gray-200 bg-base-100">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    )
}

export default SuspenseContent;