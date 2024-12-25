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
// import emailjs from "@emailjs/browser";
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
//         });
//         console.log("Toast triggered: Error");
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   };
//
//   return (
//     <div className="">
//       <div>
//         hello
//         <Card className="">
//           <CardHeader>
//             <CardTitle>Contact Me</CardTitle>
//             <CardDescription>
//               Fill out the form below to get in touch.
//             </CardDescription>
//           </CardHeader>
//           <form ref={form} onSubmit={sendEmail}>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="user_name">Name</Label>
//                 <Input
//                   id="user_name"
//                   name="user_name"
//                   placeholder="Your name"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="user_email">Email</Label>
//                 <Input
//                   id="user_email"
//                   name="user_email"
//                   type="email"
//                   placeholder="Your email"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   placeholder="Your message"
//                   required
//                 />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button type="submit" className="w-full" disabled={isSubmitting}>
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </Button>
//             </CardFooter>
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// }

// TEST2

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
//         duration: 3000,
//       });
//     });
//   };
//
//   const copyPhone = () => {
//     navigator.clipboard.writeText("+1 (555) 123-4567").then(() => {
//       toast({
//         title: "Phone Number Copied",
//         description: "Phone number has been copied to clipboard.",
//         duration: 3000,
//       });
//     });
//   };
//
//   return (
//     <div className="h-full w-full flex items-center justify-center">
//       <Card className="p-6">
//         <CardHeader>
//           <CardTitle>Contact Me</CardTitle>
//           <CardDescription>
//             Fill out the form below to get in touch or use my contact
//             information.
//           </CardDescription>
//         </CardHeader>
//         <form ref={form} onSubmit={sendEmail}>
//           <CardContent className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="user_name">Name</Label>
//                 <Input
//                   id="user_name"
//                   name="user_name"
//                   placeholder="Your name"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="user_email">Email</Label>
//                 <Input
//                   id="user_email"
//                   name="user_email"
//                   type="email"
//                   placeholder="Your email"
//                   required
//                 />
//               </div>
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
//           <CardFooter className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//             <Button
//               type="submit"
//               className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus:outline-none focus:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary border-accent-foreground border text-primary-foreground shadow hover:opacity-[0.64] transition-all duration-300 h-9 px-4 py-2"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </Button>
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
//               <div className="flex items-center gap-2">
//                 <span className="text-sm text-muted-foreground">
//                   danielzlindsayshad@email.com
//                 </span>
//                 <Button
//                   type="button"
//                   variant="outline"
//                   size="icon"
//                   onClick={copyEmail}
//                   className="h-8 w-8 flex-shrink-0"
//                 >
//                   <Copy className="h-4 w-4" />
//                 </Button>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-sm text-muted-foreground">
//                   +61 (481) 386-440
//                 </span>
//                 <Button
//                   type="button"
//                   variant="outline"
//                   size="icon"
//                   onClick={copyPhone}
//                   className="h-8 w-8 flex-shrink-0"
//                 >
//                   <Copy className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </CardFooter>
//         </form>
//       </Card>
//     </div>
//   );
// }
//

// TEST3

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
import { Copy } from "lucide-react";
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
          duration: 3000,
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
          duration: 5000,
        });
        console.log("Toast triggered: Error");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("danielzlindsayshad@email.com").then(() => {
      toast({
        title: "Email Copied",
        description: "Email address has been copied to clipboard.",
        duration: 2000,
      });
    });
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+61 (481) 386-440").then(() => {
      toast({
        title: "Phone Number Copied",
        description: "Phone number has been copied to clipboard.",
        duration: 2000,
      });
    });
  };

  return (
    <div className="bg-page w-full h-full overflow-y-auto flex flex-col rounded-2xl">
      <div className="flex-grow flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-[900px] space-y-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>
                Fill out the form below to get in touch or use my contact
                information.
              </CardDescription>
            </CardHeader>
            <form ref={form} onSubmit={sendEmail}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <CardFooter className="flex flex-col items-start gap-4">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      danielzlindsayshad@email.com
                    </span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={copyEmail}
                      className="h-8 w-8 flex-shrink-0"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      +61 (481) 386-440
                    </span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={copyPhone}
                      className="h-8 w-8 flex-shrink-0"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
