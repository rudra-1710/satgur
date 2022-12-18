import React from 'react';

const CommentSingle = ({ image, name, date, comment, children, isReply }) => {
    return (
        <div className={`blog-detail-comment-single ${isReply ? 'blog-detail-comment-single-reply' : ''}`}>
            <div className="blog-detail-comment-single-wrapper">
                <div className="comment-author">
                    <img src={image} alt="comment-author" />
                </div>
                <div className="comment-content">
                    <h4>{name}</h4>
                    <h5>{date}</h5>
                    <p>{comment}</p>
                </div>
                <div className="reply button-group">
                    <a href="/#" className="button button-4 txt-upper">
                        <div>
                            <i className="fas fa-reply"></i>
                            <span>reply</span>
                        </div>
                    </a>
                </div>       
            </div>
            {children}
        </div>
    );
};

export default CommentSingle;
