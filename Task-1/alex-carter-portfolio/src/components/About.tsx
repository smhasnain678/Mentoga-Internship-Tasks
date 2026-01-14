import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import alexPortrait from "@/assets/alex-portrait.jpg";

const skills = [
  "Brand Identity",
  "Packaging Design",
  "Web Design",
  "Typography",
  "UI/UX",
  "Illustration",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={alexPortrait}
                alt="Alex Carter - Graphic Designer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Designing with Purpose & Passion
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed mb-8">
              <p>
                With over 8 years of experience in graphic design, I've had the
                privilege of working with brands across industries—from emerging
                startups to established enterprises. My approach combines strategic
                thinking with creative execution.
              </p>
              <p>
                I believe that great design is more than aesthetics; it's about
                solving problems and creating meaningful connections between brands
                and their audiences. Every project is an opportunity to tell a unique
                story through visual language.
              </p>
              <p>
                When I'm not designing, you'll find me exploring art galleries,
                experimenting with new typography, or hiking trails with my camera
                in hand, always seeking inspiration from the world around me.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 bg-muted text-foreground font-body text-sm rounded-full"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
