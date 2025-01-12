// TEST1
// import ContactInfo from "@/components/contact/ContactInfo";
// import SocialLinks from "@/components/contact/SocialLinks";
// import ContactForm from "@/components/contact/ContactForm";
// import { contactInfo, socialLinks } from "@/data/contact";
// import { motion } from "framer-motion";
// import OverlayLine from "@/components/OverlayLine";
//
// const ContactPage = () => {
//   return (
//     <div className="h-full w-full bg-[#1d1d19] p-12">
//       {/* <div className="grid md:grid-cols-2"> */}
//       <div className="flex flex-row gap-40">
//         {/* Left Column - Contact Info */}
//         <div className="flex flex-col gap-12 text-[#eee9cc]">
//           <div className="flex-1">
//             <h1 className="text-6xl mb-12">Contact Me</h1>
//             <p className="text-lg">
//               I am here to connect,{" "}
//               <motion.span
//                 initial={{ opacity: 0 }}
//                 whileInView={{
//                   opacity: 1,
//                   // backgroundColor: "#4c7743",
//                   // borderRadius: "3px",
//                   transition: { duration: 2, ease: "easeIn" },
//                 }}
//               >
//                 create
//               </motion.span>
//               , <br />
//               and contribute to a future fuelled <br />
//               by passion and purpose.
//             </p>
//           </div>
//
//           <div className="space-y-8">
//             <ContactInfo contactInfo={contactInfo} />
//             <SocialLinks socialLinks={socialLinks} />
//           </div>
//         </div>
//
//         {/* Right Column - Contact Form */}
//         <div className="flex-1 text-[#eee9cc]">
//           <ContactForm />
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default ContactPage;

// TEST2
import ContactInfo from "@/components/contact/ContactInfo";
import SocialLinks from "@/components/contact/SocialLinks";
import ContactForm from "@/components/contact/ContactForm";
import { contactInfo, socialLinks } from "@/data/contact";
import { motion } from "framer-motion";
// import OverlayLine from "@/components/OverlayLine";
import Arrow from "@/animations/Arrow";

const ContactPage = () => {
  return (
    <div className="h-full w-full bg-[#1d1d19] p-12">
      {/* <div className="grid md:grid-cols-2"> */}
      <div className="flex flex-row">
        {/* Left Column - Contact Info */}
        <div className="flex flex-col gap-12 text-[#eee9cc]">
          <div className="flex-1">
            <h1 className="text-6xl mb-8">
              Contact{" "}
              <span
                style={{
                  textDecorationLine: "line-through",
                  textDecorationStyle: "wavy",
                  textDecorationThickness: "4px",
                }}
              >
                Me
              </span>
            </h1>
            <p className="text-lg">
              I am here to connect,{" "}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 2, ease: "easeIn" },
                }}
              >
                create
              </motion.span>
              , <br />
              and contribute to a future fuelled <br />
              by passion and purpose.
            </p>
            <div className="mt-4 w-6">
              <Arrow />
            </div>
          </div>
          <div className="space-y-8">
            <ContactInfo contactInfo={contactInfo} />
            <SocialLinks socialLinks={socialLinks} />
          </div>
        </div>
        {/* Spacer div */}
        <div className="w-[120px] ml-[20px] mr-[20px] border-l border-l-[#eee9cc] border-r border-r-[#eee9cc] " />
        {/* Right Column - Contact Form */}
        <div className="flex-1 text-[#eee9cc]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
