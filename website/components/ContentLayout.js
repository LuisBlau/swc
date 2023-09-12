import React from 'react';
import Sidebar from "./Sidebar";
import LatestPosts from "./LatestPosts"

const ContentLayout = (props) => {
    return (
        <div className="body page">
            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 index-links">
                            <div className="col-md-12 item page-content">
                                <h1 style={{ marginBottom: '8px' }}>{props?.title}</h1>
                                <p className="subtitle" style={{ color: '#F6BC00', textTransform: 'uppercase', marginBottom: '32px' }}>
                                    {props?.subtitle}
                                </p>
                                {props.children}
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>

            <LatestPosts />
        </div>
    )
};

export default ContentLayout
