import ContactInfo from "@/components/contact/ContactInfo";
import SocialLinks from "@/components/contact/SocialLinks";
import ContactForm from "@/components/contact/ContactForm";
import { contactInfo, socialLinks } from "@/data/contact";
import { motion } from "framer-motion";
import Arrow from "@/animations/Arrow";
import OverlayLine from "@/components/OverlayLine";

const ContactPage = () => {
  const slideInVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 1.5,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="h-full w-full bg-[#1c1915] p-12">
      <div className="flex flex-row">
        {/* Left Column - Contact Info */}
        <div className="flex flex-col gap-12 text-[#eee9cc] ">
          <div className="flex-1">
            {/* <div className="absolute inset-0 -z-1"> */}
            {/*   <OverlayLine */}
            {/*     top={{ x: "29.5%", y: "0%" }} */}
            {/*     bottom={{ x: "0%", y: "40%" }} */}
            {/*     colour="#eee9cc" */}
            {/*     thickness="1px" */}
            {/*   /> */}
            {/* </div> */}
            <h1 className="text-6xl mb-8 font-sometimesTimes">
              Contact{" "}
              <span
              // style={{
              //   textDecorationLine: "line-through",
              //   textDecorationStyle: "wavy",
              //   textDecorationThickness: "4px",
              // }}
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

        {/* Animated Spacer div */}
        <motion.div
          variants={slideInVariants}
          initial="hidden"
          animate="visible"
          className="w-[120px] ml-[20px] mr-[20px] border-l border-l-[#eee9cc] border-r border-r-[#eee9cc]"
        />

        {/* Animated Right Column - Contact Form */}
        <motion.div
          variants={slideInVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-[#eee9cc]"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
