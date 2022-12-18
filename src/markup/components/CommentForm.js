import React, { useState } from 'react';

const CommentForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    return (
        <form>
            <div className="row">
                <div className="col-lg-6">
                    <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col-lg-6">
                    <input type="text" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <textarea placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <button className="button button-3 txt-upper" type="submit">
                        <div>
                            <i className="far fa-comment"></i>
                            <span>post comment</span>
                        </div>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CommentForm;
