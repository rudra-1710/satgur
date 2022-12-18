import React from 'react';

// components
import PageHeaderList from '../components/PageHeaderList';
import CommentForm from '../components/CommentForm';
import CommentSingle from '../components/CommentSingle';
import Button from '../components/Button';

// images
import blog_image from '../../assets/images/blog/blog-single-img-1-big.jpg';
import blog_comment_img_1 from '../../assets/images/blog/comment-img-1.png';
import blog_comment_img_2 from '../../assets/images/blog/comment-img-2.png';
import blog_comment_img_3 from '../../assets/images/blog/comment-img-3.png';
import pattern1 from '../../assets/images/patterns/pattern.png';

const BlogDetail = () => {

    const comment_display = (comment, index) => {
        if (comment.reply) {
            return (
                <CommentSingle
                    key={index}
                    image={comment.image}
                    name={comment.name}
                    date={comment.date}
                    comment={comment.comment}
                    isReply={true}
                >
                    {
                        comment.reply ? comment.reply.map((reply) => {
                            return comment_display(reply);
                        }): null
                    }
                </CommentSingle>
            )
        }
        return (
            <CommentSingle
                key={index}
                image={comment.image}
                name={comment.name}
                date={comment.date}
                comment={comment.comment}
                isReply={true}
            />
        );
    }

    const comments = [
        {
            image: blog_comment_img_1,
            name: 'Collin Smith',
            date: '25 AUG, 2019',
            comment: 'Great post Collin! thoroughly enjoyed your writing and insights into the industry. I will definitely look foward to your next post.',
            reply: [
                {
                    image: blog_comment_img_2,
                    name: 'Collin Smith',
                    date: '25 AUG, 2019',
                    comment: 'Great post Collin! thoroughly enjoyed your writing and insights into the industry. I will definitely look foward to your next post.',
                }
            ]
        },
        {
            image: blog_comment_img_3,
            name: 'Collin Smith1',
            date: '25 AUG, 2019',
            comment: 'Great post Collin! thoroughly enjoyed your writing and insights into the industry. I will definitely look foward to your next post.',
        }
    ]

    return (
        <>
            {/* page header list - start */}
            <PageHeaderList 
                items={[
                    {
                        text: 'News',
                        to: '/blog',
                        active: true
                    },
                    {
                        text: 'Recent',
                        to: '/blog',
                        active: false
                    },
                    {
                        text: 'Popular',
                        to: '/blog',
                        active: false
                    },
                    {
                        text: 'Most Commented',
                        to: '/blog',
                        active: false
                    }
                ]}
                addMarginTop
            />
            {/* page header list - end */}

            {/* blog detail content - start */}
            <div className="blog-detail page-bg">
                <div className="blog-detail-wrapper page-bg-wrapper">
                    <div className="container page-bg-content">
                        <div className="row">
                            {/* blog detail content - start */}
                            <div className="blog-detail-content row">
                                <div className="date col-lg-1">
                                    <h4>AUG <span>25</span></h4>
                                </div>
                                <div className="content col-lg-10">
                                    <figure>
                                        <img src={blog_image} alt="blog-thumbnail" />
                                    </figure>
                                    <h2 className="title">Highlights of the Tax Cuts and Job Act of 2019 in United States.</h2>
                                    <p>A term first coined by the Bay Street Group[1], the ‘Connected Accountant’ is defined as an individual who can deliver an increased level of responsiveness, client service and efficiency to meet the demands of this increasingly connected, always on, faster moving and more competitive marketplace.</p>
                                    <p>We have never been more connected than we are today. In a world that’s always online, it’s possible to communicate with family, friends and colleagues at any time of the day and from anywhere in the world. Digitization is driving this enormous change and opening the doors to new opportunities.  Now, a data connection means that it is possible to work alongside clients using cloud accounting applications wherever they happen to be in the world, to hold virtual meetings without either the client or accountant having to leave their office and to use social networking platforms to attract new clients. Location no longer holds any boundaries. </p>
                                    <p>Accessibility and responsiveness are key requirements for operating in this highly competitive climate and new software is able to facilitate ongoing communication with high value clients that increasingly expect their accountant to meet them where they spend most of their time: on their smartphones and tablets. Making conscious decisions about how best to connect, serve and influence via this medium is vital as accountants need to be at the heart of the action. The news that the QB live solution is now being aimed at micro businesses not connected to an advisor, makes it even more of an imperative to ensure robust connections are in place.</p>
                                    <h3 className="sub-title">Do Clients Want More Digital Interaction?</h3>
                                    <p>Some interesting findings from a recent study in the legal sector can be applied to the accounting profession. The study[2] ,which drew on the views of 1,000 consumers and 500 UK law firms, found that clients want more digital interaction. The report finds that new ways of communicating are being welcomed as clients demand more immediacy; they don’t want to wait days for paper documents to arrive in the post or for an email to come through with the answer to a question that could be easily resolved with an instant message or automated response.</p>
                                    <p>This study carries an important message that clients expect their advisors to digitally engage with them in the way that they want, need and expect. And one way of enabling digital engagement and capturing client data in this new online world is with a digital platform developed specifically for the accountant in practice for powerful one-to-one conversations.</p>
                                    <h3 className="sub-title">The Power of Personal Digital Conversations</h3>
                                    <p>These online conversations can be topical, such as budget updates, or they can provide an opportunity to upsell, informing clients about other services. The beauty of this approach is that the messages can be automated, in which case the accountant does not have to do anything at all.</p>
                                    <p>Those firms already using ‘automated client communications’ report that they are able to increase the number of touch points substantially and keep clients updated with crucial information without having to burden the team. One of the key benefits is that the accountant sending the update ‘appears’ to the client to be available 24/7, even when the office is closed.</p>
                                    <p>Another highly effective way of using mobile on a one-to-one basis is to incorporate ‘push notification’ messages into the firm’s communication strategy. These simple text messages are already used extensively in our personal lives, but now they can be used to help communicate with clients and contacts quickly and easily. Delivery can be automated to individuals and groups, which almost immediately ‘ping’ onto the home screen of client’s mobile devices.</p>
                                    <p>That they have a 93% open rate means that these messages are almost always read – typically, within minutes of delivery – and research indicates that push notifications are particularly effective in the financial services sector.2 This functionality is an opportunity for firms to automate the distribution of content, ranging from reminders about tax deadlines, to news on services and invites to webinars.</p>
                                    <p>There is no doubt that one of the greatest challenges facing the profession is how best to re-engineer accountancy firms for the digital age.  Crucially, grasping the digital lead provides immediate and ongoing benefits to firms and clients alike and will future-proof communication strategies without absorbing valuable time or requiring significant up-front investment.</p>
                                    <p>Get access to a new report on how to become a ‘connected’ accountant in a digital, mobile world. ‘The Connected Accountant’ features 28 pages of fact-filled content and is available as a free download from https://www.myfirmsapp.com/the-connected-accountant/. See the leading OneApp platform for Accountancy Firms worldwide at the Accountex USA on September 5-6th 2019.</p>
                                    <p>MyFirmsApp was the first and original developer of bespoke Apps for Accountancy firms. Over the last six years, the company has grown to become the number one provider globally, having developed over 1200 Apps for accountants and bookkeepers, which are used by over 200,000 businesses daily to manage their finances.</p>
                                    {/* social - start */}
                                    <div className="post-social">
                                        <ul>
                                            <li className="facebook">
                                                <a href="/#"><i className="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li className="twitter">
                                                <a href="/#"><i className="fab fa-twitter"></i></a>
                                            </li>
                                            <li className="pinterest">
                                                <a href="/#"><i className="fab fa-pinterest"></i></a>
                                            </li>
                                            <li className="linkedin">
                                                <a href="/#"><i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                            <li className="share">
                                                <a href="/#"><i className="fas fa-link"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* social - end */}
                                </div>
                            </div>
                            {/* blog detail content - end */}
                        </div>
                    </div>

                    {/* blog detail comment - start */}
                    <div className="blog-detail-comment pattern-bg">
                        <div className="blog-detail-comment-wrapper">
                            <div className="container pattern-bg-content">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <h2 className="blog-detail-comment-heading">Recent Comments</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="container pattern-bg-content">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <div className="blog-detail-comment-list">                                    
                                            {/* blog detail comment single - start */}
                                            { comments.map((comment, index) => {
                                                return (
                                                    <CommentSingle
                                                        key={index}
                                                        image={comment.image}
                                                        name={comment.name}
                                                        date={comment.date}
                                                        comment={comment.comment}
                                                        isReply={false}
                                                    >
                                                        {
                                                            comment.reply ? comment.reply.map((reply, index) => {
                                                                return comment_display(reply, index);
                                                            }): null
                                                        }
                                                    </CommentSingle>
                                                
                                                );
                                            }) }
                                            {/* blog detail comment single - end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* blog detail comment - end */}


                    {/* blog detail form - start */}
                    <div className="blog-detail-form">
                        <div className="blog-detail-form-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <h2>Leave a Comment</h2>
                                        <CommentForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* blog detail form - end */}
                </div>
            </div>
            {/* blog detail content - end */}

            {/* cta section - start */}
            <div className="cta-section b-primary">
                <div className="cta-section-wrapper section-wrapper" style={{ backgroundImage: `url(${pattern1})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="cta-section-content txt-center">
                                <h2 className="c-white f-w-400 heading-40 mg-center">Hire a professional CPA & Accounting firm.</h2>
                                <div className="button-group">
                                    <Button
                                        className='button-1 txt-upper'
                                        to='/contact'
                                        icon='far fa-envelope'
                                        text='book appointment'
                                    />
                                    <Button
                                        className='button-2 txt-upper'
                                        to='/contact'
                                        icon='fas fa-headphones'
                                        text='talk to an expert'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cta section - end */}
        </>
    );
};

export default BlogDetail;
