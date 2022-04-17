import React from 'react';

const Blog = () => {
    return (
        <div className='d-lg-flex container justify-content-between align-items-center p-5'>
            <div>
                <h2 className='text-center text-primary my-3'>Questions and Answers </h2>
            <h4>1. Difference between authorization and authentication</h4>
            Ans : Authentication process Authorization process এর আগে করা হয়
            সহজভাবে বলতে গেলে, authentication হল  who someone is তা যাচাই করা অর্থাৎ একজন ব্যবহারকারী কে তা যাচাই করার প্রক্রিয়া . 
            একটি প্রতিষ্ঠানে  কর্মচারীদের আইডি এবং পাসওয়ার্ড যাচাই এবং নিশ্চিত করাকে authentication বলা হয় .  
            <br />
            <br />
            Authorization process  Authentication process এর পরে করা হয়
            Authorization  হল user কোন নির্দিষ্ট applications, filesএবং data access রয়েছে তা যাচাই করার প্রক্রিয়া . অর্থাৎ ব্যবহারকারী তাদের কী অ্যাক্সেস আছে তা যাচাই করার প্রক্রিয়া কোন কর্মচারীর কোন ফ্লোরে access আছে তা নির্ধারণ করাকে authorizationবলা হয়.
            <br />
            <br />
            <h4>2. Why are you using firebase? What other options do you have to implement authentication?</h4>
            Ans : Firebase Authentication backend services সহ এটি পাসওয়ার্ড, ফোন নম্বর, Google, Facebook এবং Twitter এর মতো জনপ্রিয় site গুলোরপরিচয় প্রদানকারী এবং আরও অনেক কিছু ব্যবহার করে authentication এ সমর্থন করে।অর্থাৎ Firebase Authentication আপনার নিজস্ব Authentication সিস্টেম বাস্তবায়নের পিছনে জটিলতাগুলি না বুঝেই আপনার ব্যবহারকারীদের সাইন-ইন করা সহজ করে তোলে ৷  
            <br />
            <br />
            Firebase উচ্চ-মানের অ্যাপ তৈরিতে ,সহজে ব্যবহারযোগ্য SDK, এবং আপনার অ্যাপে ব্যবহারকারীদের Authentication জন্য তৈরি UI লাইব্রেরি প্রদান করে ।গেম অ্যাপ্লিকেশানগুলি তৈরি করতে, প্রকাশ  করতেএবং পরিচালনা  করতে Unity এবং C++ SDK এর সাথে কাজ করা যায়৷ ফায়ারবেস স্টোরেজ মূলত একটি শক্তিশালী এবং সহজ অবজেক্ট স্টোরেজ, যেখানে আপনি সহজেই আপনার ফাইল সংরক্ষণ করতে পারেন।ক্লাউড ফায়ারস্টোর হল একটি NoSQL ডকুমেন্ট ডাটাবেস যা আপনাকে সহজেই আপনার মোবাইল এবং ওয়েব অ্যাপের জন্য ডেটা store, sync, and query data সঞ্চয় করে - at global scale।

            <br />
            <br />
            <h4>3. What other services does firebase provide other than authentication</h4>
            Ans : 
            (i)ওপেন সোর্স ব্যাকএন্ড platform;<br />
            (ii)হোস্টিং প্ল্যাটফর্ম  করুন;<br />
            (iii)Mobile Backend service <br />
            (iv)Mobile Backend এবং API service প্ল্যাটফর্ম<br />
            (v) web, hybrid, or native mobile apps এবং OIT প্রকল্পগুলির জন্য ব্যাকএন্ড;<br />
            (vi)Cloud Firestore / Cloud Storage.<br />
            (vii)Cloud Functions / Cloud Messaging.<br />
            (viii)Authentication.<br />
            (x)Google Analytics.<br />
            (xi)Predictions.<br />
            </div>
        </div>
    );
};

export default Blog;