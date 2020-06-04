import React from "react";

export const withSuspense = (Component) => {
    return (props) => {
        return (
            <React.Suspense fallback={<div className='loading'>Loading...</div>}>
                <Component {...props} />
            </React.Suspense>
        )
    }
};