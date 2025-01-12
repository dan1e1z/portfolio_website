// import React, { useRef, useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";
// import { ToastAction } from "@/components/ui/toast";
// import { Copy } from "lucide-react";
// import emailjs from "@emailjs/browser";
// import { Instagram, Linkedin, Github } from "lucide-react";
// import OverlayLine from "@/components/OverlayLine";
//
// export default function Contacts() {
//   const form = useRef<HTMLFormElement>(null);
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//
//   const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//
//     if (form.current) {
//       const formData = {
//         user_name: form.current.user_name.value,
//         user_email: form.current.user_email.value,
//         message: form.current.message.value,
//       };
//
//       try {
//         await emailjs.send(
//           import.meta.env.VITE_EMAILJS_SERVICE_ID,
//           import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//           formData,
//           import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
//         );
//
//         toast({
//           title: "Message Sent",
//           description: "Your message has been sent successfully.",
//           duration: 3000,
//         });
//         console.log("Toast triggered: Success");
//
//         form.current.reset();
//       } catch (error) {
//         console.error("FAILED...", error);
//
//         toast({
//           variant: "destructive",
//           title: "Error",
//           description: "Failed to send message. Please try again.",
//           action: <ToastAction altText="Try again">Try again</ToastAction>,
//           duration: 5000,
//         });
//         console.log("Toast triggered: Error");
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   };
//
//   const copyEmail = () => {
//     navigator.clipboard.writeText("danielzlindsayshad@email.com").then(() => {
//       toast({
//         title: "Email Copied",
//         description: "Email address has been copied to clipboard.",
//         duration: 2000,
//       });
//     });
//   };
//
//   const copyPhone = () => {
//     navigator.clipboard.writeText("+61 (481) 386-440").then(() => {
//       toast({
//         title: "Phone Number Copied",
//         description: "Phone number has been copied to clipboard.",
//         duration: 2000,
//       });
//     });
//   };
//
//   return (
//     <div className="bg-page w-full h-full overflow-y-auto flex flex-col rounded-2xl">
//       <div className="flex-grow flex flex-row justify-center items-center p-4">
//         <div className="w-full max-w-[900px] space-y-8">
//           <Card className="w-full">
//             <CardHeader>
//               <CardTitle>Contact Me</CardTitle>
//               <CardDescription>
//                 Fill out the form below to get in touch or use my contact
//                 information.
//               </CardDescription>
//             </CardHeader>
//             <form ref={form} onSubmit={sendEmail}>
//               <CardContent className="space-y-4">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="user_name">Name</Label>
//                     <Input
//                       id="user_name"
//                       name="user_name"
//                       placeholder="Your name"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="user_email">Email</Label>
//                     <Input
//                       id="user_email"
//                       name="user_email"
//                       type="email"
//                       placeholder="Your email"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="message">Message</Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     placeholder="Your message"
//                     required
//                   />
//                 </div>
//               </CardContent>
//               <CardFooter className="flex flex-col items-start gap-4">
//                 <Button
//                   type="submit"
//                   className="w-full"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </Button>
//                 <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                   <div className="flex items-center gap-2">
//                     <span className="text-sm text-muted-foreground">
//                       danielzlindsayshad@email.com
//                     </span>
//                     <Button
//                       type="button"
//                       variant="outline"
//                       size="icon"
//                       onClick={copyEmail}
//                       className="h-8 w-8 flex-shrink-0"
//                     >
//                       <Copy className="h-4 w-4" />
//                     </Button>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-sm text-muted-foreground">
//                       +61 (481) 386-440
//                     </span>
//                     <Button
//                       type="button"
//                       variant="outline"
//                       size="icon"
//                       onClick={copyPhone}
//                       className="h-8 w-8 flex-shrink-0"
//                     >
//                       <Copy className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>
//               </CardFooter>
//             </form>
//           </Card>
//         </div>
//
//         <div className=" ml-6 flex flex-col justify-evenly h-full">
//           <a
//             href="https://www.instagram.com/daniel_lindsayshad/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Button
//               size="icon"
//               variant="ghost"
//               className="rounded-ss bg-gradient-to-br from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600"
//             >
//               <Instagram className="h-5 w-5 text-white" />
//             </Button>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/daniel-lindsay-shad-148073224/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Button
//               size="icon"
//               variant="ghost"
//               className="rounded-ss bg-blue-600 text-white hover:bg-blue-700"
//             >
//               <Linkedin className="h-5 w-5 text-white" />
//             </Button>
//           </a>
//           <a
//             href="https://github.com/dan1e1z"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Button
//               size="icon"
//               variant="ghost"
//               className="rounded-ss bg-gray-700 text-white hover:bg-gray-800"
//             >
//               <Github className="h-5 w-5 text-white" />
//             </Button>
//           </a>
//         </div>
//
//         <div className="absolute inset-0">
//           <OverlayLine
//             top={{ x: "50%", y: "0%" }}
//             bottom={{ x: "0%", y: "50%" }}
//             colour="#eee9cc"
//             thickness="1px"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// TEST2

// import React from "react";
//
// interface ContactEmail {
//   label: string;
//   email: string;
// }
//
// interface SocialLink {
//   name: string;
//   url: string;
// }
//
// const Contacts: React.FC = () => {
//   const contactEmails: ContactEmail[] = [
//     {
//       label: "For email",
//       email: "danielzlindsayshad@gmail.com",
//     },
//     {
//       label: "For phone number",
//       email: "+61 (481) 386-440",
//     },
//     {
//       label: "For careers inquiries",
//       email: "careers@yard.me",
//     },
//   ];
//
//   const socialLinks: SocialLink[] = [
//     {
//       name: "Instagram",
//       url: "https://www.instagram.com/yardgroup_/",
//     },
//     {
//       name: "LinkedIn",
//       url: "https://www.linkedin.com/company/yard-agency/",
//     },
//   ];
//
//   return (
//     <div className="w-full h-full bg-page">
//       <div className="container mx-auto px-4 py-16 max-w-6xl">
//         {/* Hero Section */}
//         <div className="mb-16">
//           <h2 className="text-6xl md:text-8xl font-bold mb-8 -rotate-1">
//             Contact Me
//           </h2>
//
//           <div className="grid md:grid-cols-12 gap-8">
//             <div className="md:col-span-4">
//               <p className="text-lg">
//                 I am here to connect, create, and contribute to a future fuelled
//                 by passion and purpose. Driven by the belief that collaboration
//                 sparks growth and innovation, I strive to turn ideas into
//                 impactful realities.
//               </p>
//             </div>
//           </div>
//         </div>
//
//         {/* Contact Emails Section */}
//         <div className="flex flex-col md:flex-row md:justify-between items-start">
//           <div className="w-full md:w-auto">
//             <ul className="space-y-6">
//               {contactEmails.map((contact) => (
//                 <li key={contact.email}>
//                   <p className="text-sm uppercase mb-1">{contact.label}</p>
//                   <a
//                     href={`mailto:${contact.email}`}
//                     className="text-2xl md:text-4xl font-medium hover:opacity-70 transition-opacity"
//                   >
//                     {contact.email}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Contacts;

// TEST4
// import React from "react";
//
// interface ContactEmail {
//   label: string;
//   text: string;
// }
//
// interface SocialLink {
//   name: string;
//   url: string;
// }
//
// const Contacts: React.FC = () => {
//   const contactEmails: ContactEmail[] = [
//     {
//       label: "For Email",
//       text: "danielzlindsayshad@gmail.com",
//     },
//     {
//       label: "For Phone Number",
//       text: "+61 481 386 440",
//     },
//   ];
//
//   const socialLinks: SocialLink[] = [
//     {
//       name: "Instagram",
//       url: "https://www.instagram.com/yardgroup_/",
//     },
//     {
//       name: "LinkedIn",
//       url: "https://www.linkedin.com/company/yard-agency/",
//     },
//     {
//       name: "GitHub",
//       url: "https://github.com/yard-agency/",
//     },
//   ];
//
//   return (
//     <div className="w-full h-full bg-page flex">
//       <div className="container mx-auto px-4 py-16 max-w-6xl">
//         {/* Hero Section */}
//         <div className="mb-16">
//           <h2 className="text-6xl md:text-8xl font-bold mb-8">Contact Me</h2>
//           <div className="grid md:grid-cols-12 gap-8">
//             <div className="md:col-span-4">
//               <p className="text-lg">
//                 I am here to connect, create, and contribute to a future fuelled
//                 by passion and purpose. Driven by the belief that collaboration
//                 sparks growth and innovation, I strive to turn ideas into
//                 impactful realities.
//               </p>
//             </div>
//           </div>
//         </div>
//
//         {/* Contact textrmation Section */}
//         <div className="space-y-16">
//           {/* Contact and Social Links */}
//           <div className="space-y-6">
//             {/* Emails Section */}
//             <ul className="space-y-6">
//               {contactEmails.map((contact) => (
//                 <li key={contact.text}>
//                   <p className="text-sm uppercase mb-1">{contact.label}</p>
//                   <a
//                     href={`mailto:${contact.text}`}
//                     className="text-2xl md:text-4xl font-medium hover:opacity-70 transition-opacity block uppercase"
//                   >
//                     {contact.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//
//             {/* Social Links Section */}
//             <ul className="flex space-x-6">
//               {socialLinks.map((social) => (
//                 <li key={social.name}>
//                   <a
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm uppercase hover:opacity-70 transition-opacity"
//                   >
//                     {social.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div>hello</div>
//     </div>
//   );
// };
//
// export default Contacts;

// TEST5
// import React, { useState } from "react";
//
// type ContactInfo = {
//   label: string;
//   text: string;
//   type: "email" | "phone";
// };
//
// type SocialLink = {
//   name: string;
//   url: string;
// };
//
// const contactInfo: ContactInfo[] = [
//   {
//     label: "For Email",
//     text: "danielzlindsayshad@gmail.com",
//     type: "email",
//   },
//   {
//     label: "For Phone Number",
//     text: "+61 481 386 440",
//     type: "phone",
//   },
// ];
//
// const socialLinks: SocialLink[] = [
//   {
//     name: "Instagram",
//     url: "https://www.instagram.com/yardgroup_/",
//   },
//   {
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/company/yard-agency/",
//   },
//   {
//     name: "GitHub",
//     url: "https://github.com/yard-agency/",
//   },
// ];
//
// const ContactLink: React.FC<ContactInfo> = ({ label, text, type }) => (
//   <li>
//     <p className="text-sm uppercase mb-1">{label}</p>
//     <a
//       href={type === "email" ? `mailto:${text}` : `tel:${text}`}
//       className="text-2xl md:text-4xl font-medium hover:opacity-70 transition-opacity block uppercase"
//     >
//       {text}
//     </a>
//   </li>
// );
//
// const SocialLink: React.FC<SocialLink> = ({ name, url }) => (
//   <li>
//     <a
//       href={url}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-sm uppercase hover:opacity-70 transition-opacity"
//     >
//       {name}
//     </a>
//   </li>
// );
//
// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     company: "",
//     message: "",
//     email: "",
//     phone: "",
//     privacy: false,
//   });
//
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };
//
//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <form className="space-y-8">
//         <h1 className="text-4xl mb-8">Hello Daniel, my name is</h1>
//
//         <div className="space-y-6">
//           <div className="relative">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border-b border-gray-300 pb-2 text-xl focus:outline-none focus:border-gray-600 bg-transparent"
//               placeholder="type your name*"
//             />
//           </div>
//
//           <div className="relative">
//             <h3 className="text-lg mb-2">I work on</h3>
//             <input
//               type="text"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               className="w-full border-b border-gray-300 pb-2 text-xl focus:outline-none focus:border-gray-600 bg-transparent"
//               placeholder="type your company"
//             />
//           </div>
//
//           <div className="relative">
//             <h3 className="text-lg mb-2">I would like to</h3>
//             <input
//               type="text"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full border-b border-gray-300 pb-2 text-xl focus:outline-none focus:border-gray-600 bg-transparent"
//               placeholder="type your message"
//             />
//           </div>
//
//           <div className="relative">
//             <h3 className="text-lg mb-2">You can reach me at</h3>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border-b border-gray-300 pb-2 text-xl focus:outline-none focus:border-gray-600 bg-transparent"
//               placeholder="type your email address*"
//             />
//           </div>
//         </div>
//
//         <label className="flex items-center space-x-2 mt-6">
//           <input
//             type="checkbox"
//             name="privacy"
//             checked={formData.privacy}
//             onChange={handleChange}
//             className="form-checkbox h-4 w-4"
//           />
//           <span className="text-sm">
//             I agree to the{" "}
//             <a href="/privacy" className="underline hover:text-gray-600">
//               privacy policy
//             </a>
//           </span>
//         </label>
//
//         <button
//           type="submit"
//           disabled={!formData.privacy}
//           className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };
//
// const Contacts: React.FC = () => {
//   return (
//     <div className="w-full h-full bg-page flex">
//       <div className="px-4 py-16">
//         <div className="mb-16">
//           <h2 className="text-6xl md:text-8xl font-bold mb-8">Contact Me</h2>
//           <p className="text-lg">
//             I am here to connect, create, and contribute to a future fuelled by
//             passion and purpose. Driven by the belief that collaboration sparks
//             growth and innovation, I strive to turn ideas into impactful
//             realities.
//           </p>
//         </div>
//
//         <div className="space-y-16">
//           <div className="space-y-6">
//             <ul className="space-y-6">
//               {contactInfo.map((contact) => (
//                 <ContactLink key={contact.text} {...contact} />
//               ))}
//             </ul>
//
//             <ul className="flex space-x-6">
//               {socialLinks.map((social) => (
//                 <SocialLink key={social.name} {...social} />
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       <ContactForm />
//     </div>
//   );
// };
//
// export default Contacts;

// TEST6 - MOBILE / SMALL SCREEN
import ContactInfo from "@/components/contact/ContactInfo";
import SocialLinks from "@/components/contact/SocialLinks";
import ContactForm from "@/components/contact/ContactForm";
import { contactInfo, socialLinks } from "@/data/contact";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="h-full w-full bg-[#1d1d19] p-12">
      {/* <div className="grid md:grid-cols-2"> */}
      <div className="flex flex-row gap-12">
        {/* Left Column - Contact Info */}
        <div className="flex flex-col gap-12 text-[#eee9cc]">
          <div className="flex-1">
            <h1 className="text-6xl mb-12">Contact Me</h1>
            <p className="text-lg">
              I am here to connect,{" "}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  // backgroundColor: "#4c7743",
                  // borderRadius: "3px",
                  transition: { duration: 2, ease: "easeIn" },
                }}
              >
                create
              </motion.span>
              , <br />
              and contribute to a future fuelled <br />
              by passion and purpose.
            </p>
          </div>

          <div className="space-y-8">
            <ContactInfo contactInfo={contactInfo} />
            <SocialLinks socialLinks={socialLinks} />
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1 text-[#eee9cc]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
