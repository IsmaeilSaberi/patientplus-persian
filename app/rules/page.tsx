import React from 'react';  

const Rules: React.FC = () => {  
  return (  
    <div className="min-h-screen bg-zinc-800 text-white flex flex-col items-center justify-center p-4">  
      <h1 className="text-3xl font-bold mb-4">قوانین و شرایط</h1>  
      <div className="max-w-2xl">  
        <h2 className="text-2xl font-semibold mb-2">مقدمه</h2>  
        <p className="mb-4">  
          این قوانین و شرایط تحت تأثیر قوانین جاری می‌باشند و شما با استفاده از خدمات ما،   
          قبول کرده‌اید که با این شرایط موافقت کنید.  
        </p>  
        
        <h2 className="text-2xl font-semibold mb-2">قوانین کلی ما</h2>  
        <p className="mb-4">  
        اطلاعات شخصی شما توسط پشتیبانی و سیستم پر قدرت ما محفوظ است چنان چه اطلاعات خود را به هر نحوی فاش کنید ما در قبال شما مسئول نیستیم.
        </p>
        <p className="mb-4">
        در صورت بارگذاری اطلاعات ناصحیح در سیستم ما ما مسئول لغو شدن قرار ملاقات شما نیستیم.
        </p>  
        <p className="mb-4">
        از هر گونه بارگذاری اطلاعات نادرست در سایت خود داری کنید.
        </p>
        <p>
        زمان قرار ملاقات شما ممکن است برای دلایلی همچون شلوغ نشدن مطب یا تشخیص درکتر تغییر کند.
        </p>
        <center>
        <h1 className="text-3xl font-thin mb-4 text-rose-800">قوانین را با دقت مطالعه کنید.</h1>
        </center>
      </div>  
    </div>  
  );  
};  

export default Rules;