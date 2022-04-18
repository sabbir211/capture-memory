import React from 'react';

const Blogs = () => {
    return (
        <div className="container row row-cols-1 row-cols-md-3 mt-3"  style={{marginBottom:"15rem"}}>
            <div>
                <h4> 1.Difference between <code> authorization </code>and <code> authentication</code></h4>
                <article>authorization means giving permission to user where a user could go.What a user can do.User can not modify authorization.On the other hand authentication means the process of validating a user.In authentication process, the identity of users are checked for authorization.In simple language authentication means knowing a user.</article>
            </div>
            <div>
                <h4>2.Why i use firebase & What other options do i have, to implement authentication</h4>
                <article>I use <code>Firebase </code> for authentication process.To me it is more secure and easy to use than any other OAuth.Anyone can easily include firebase to there application and it will make their online work way easier than it was used to be.we  can also use ,<code>Auth0</code>,<code> Parse</code>,<code> Kinvey</code>,<code> gamesparks</code>,<code> Back4app</code>,<code>Flutter</code>  </article>

            </div>
            <div>
                <h4> 3.Other services that firebase provide </h4>
                <article>
                    <ol>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Realtime Database</li>
                    </ol>
                </article>
            </div>
        </div>
    );
};

export default Blogs;