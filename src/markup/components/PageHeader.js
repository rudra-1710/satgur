import React from 'react';

const PageHeader = ({ children, image }) => {
    return (
        <div className="page-header">
            <div className="page-header-wrapper" style={{backgroundImage: `url(${image})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="page-header-content">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
