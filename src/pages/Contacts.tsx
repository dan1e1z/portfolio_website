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
// import emailjs from "@emailjs/browser";
//
// export default function Contacts() {
//   const form = useRef<HTMLFormElement>(null);
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//
//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//
//     if (form.current) {
//       emailjs
//         .sendForm(
//           import.meta.env.VITE_SERVICE_ID,
//           import.meta.env.VITE_TEMPLATE_ID,
//           form.current,
//           {
//             publicKey: import.meta.env.VITE_PUBLIC_KEY,
//           },
//         )
//         .then(
//           () => {
//             console.log("SUCCESS!");
//             toast({
//               title: "Message sent!",
//               description: "Your message has been sent successfully.",
//             });
//             if (form.current) form.current.reset();
//           },
//           (error: emailjs.EmailJSResponseStatus) => {
//             console.error("FAILED...", error.text);
//             toast({
//               title: "Error",
//               description: "Failed to send message. Please try again.",
//               variant: "destructive",
//             });
//           },
//         )
//         .finally(() => {
//           setIsSubmitting(false);
//         });
//     }
//   };
//
//   return (
//     <div className="container mx-auto py-10">
//       <Card className="w-full max-w-md mx-auto">
//         <CardHeader>
//           <CardTitle>Contact Me</CardTitle>
//           <CardDescription>
//             Fill out the form below to get in touch.
//           </CardDescription>
//         </CardHeader>
//         <form ref={form} onSubmit={sendEmail}>
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="user_name">Name</Label>
//               <Input
//                 id="user_name"
//                 name="user_name"
//                 placeholder="Your name"
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="user_email">Email</Label>
//               <Input
//                 id="user_email"
//                 name="user_email"
//                 type="email"
//                 placeholder="Your email"
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="message">Message</Label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 placeholder="Your message"
//                 required
//               />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button type="submit" className="w-full" disabled={isSubmitting}>
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </Button>
//           </CardFooter>
//         </form>
//       </Card>
//     </div>
//   );
// }

import React, { useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import emailjs from "@emailjs/browser";

export default function Contacts() {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      const formData = {
        user_name: form.current.user_name.value,
        user_email: form.current.user_email.value,
        message: form.current.message.value,
      };

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        );

        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully.",
        });
        console.log("Toast triggered: Success");

        form.current.reset();
      } catch (error) {
        console.error("FAILED...", error);

        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to send message. Please try again.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        console.log("Toast triggered: Error");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="container flex justify-center items-center mx-auto h-screen">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>
            Fill out the form below to get in touch.
          </CardDescription>
        </CardHeader>
        <form ref={form} onSubmit={sendEmail}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="user_name">Name</Label>
              <Input
                id="user_name"
                name="user_name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="user_email">Email</Label>
              <Input
                id="user_email"
                name="user_email"
                type="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
