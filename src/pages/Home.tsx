import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowRight, Code, Palette, Zap, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useMotionValue(0);
  const x = useMotionValue(0);

  // Parallax and scroll effects
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Magnetic effect for buttons
  const handleMagneticMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const deltaX = Math.min(Math.max((clientX - centerX) * 0.2, -20), 20);
    const deltaY = Math.min(Math.max((clientY - centerY) * 0.2, -20), 20);
    
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMagneticLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        cursorRef.current.style.transform = `translate(${e.clientX - 128}px, ${e.clientY - 128}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Split text animation component
  const SplitText = ({ children }: { children: string }) => (
    <span className="split-text-animation inline-block">
      <span>{children}</span>
      <span className="text-accent-highlight">{children}</span>
    </span>
  );

  return (
    <div ref={containerRef} className="relative">
      <div className="cursor-glow" ref={cursorRef} />
      <div className="grain" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 pb-16 section overflow-hidden">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="container-xl relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-8 flex justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 10 }}
                className="px-6 py-2 rounded-full bg-accent-highlight/10 text-accent-highlight text-sm"
              >
                Digital Craftsmanship
              </motion.div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display leading-tight mb-8">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="block"
              >
                We craft digital
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="block text-outline"
              >
                experiences that
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="block text-gradient"
              >
                push boundaries
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="text-xl md:text-2xl text-accent-2 mb-12 max-w-2xl mx-auto"
            >
              A modern digital agency blending tech mastery with brand soul. We
              don't just build — we elevate, automate, and launch brands into
              their next era.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div
                style={{ x, y }}
                whileHover={{ scale: 1.05 }}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                className="magnetic-button"
              >
                <Link to="/contact" className="btn-primary">
                  Start a Project
                </Link>
              </motion.div>
              
              <motion.div
                style={{ x, y }}
                whileHover={{ scale: 1.05 }}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                className="magnetic-button"
              >
                <Link to="/work" className="btn-outline">
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        </motion.div>
      </section>

      {/* Interactive Services Section */}
      <section className="section bg-accent-1/5 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="container-xl"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display mb-4">
              <SplitText>Our Expertise</SplitText>
            </h2>
            <p className="text-accent-2 max-w-2xl mx-auto">
              We solve real business problems with creative, engineered solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette size={32} />,
                title: 'Digital Design',
                description:
                  'Beautiful, functional interfaces that engage users and drive conversions.',
              },
              {
                icon: <Code size={32} />,
                title: 'Development',
                description:
                  'Cutting-edge web applications built with modern technologies and best practices.',
              },
              {
                icon: <Zap size={32} />,
                title: 'Automation',
                description:
                  'Smart systems that streamline your workflow and scale your business.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="magnetic-area bg-background/50 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-accent-highlight mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-display mb-4">{service.title}</h3>
                <p className="text-accent-2 mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-accent-highlight hover:gap-2 transition-all group"
                >
                  Learn More{' '}
                  <ArrowRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated background elements */}
        {/* <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent-highlight/5 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent-highlight/5 rounded-full"
          />
        </div> */}
      </section>

      {/* Manifesto Section */}
      <section className="section relative">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-display mb-12">Our Manifesto</h2>
            <div className="space-y-8">
              {[
                "We believe websites should feel.",
                "We believe automation should free humans, not replace them.",
                "We believe good design is invisible, and good code is magic."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-2xl font-light hover:text-accent-highlight transition-colors cursor-default"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interactive mouse trailer */}
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-accent-2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MousePointer2 size={20} />
          <span className="text-sm">Scroll to explore</span>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section bg-foreground text-background relative overflow-hidden">
        <div className="container-xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display mb-6">
              Ready to create something extraordinary?
            </h2>
            <p className="text-accent-1 mb-8 text-lg">
              Let's turn your vision into reality.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="btn bg-background text-foreground hover:bg-accent-1 relative z-10"
              >
                Let's Create Something Beautiful
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 grid grid-cols-8 gap-4 opacity-10">
            {Array.from({ length: 64 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 4,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="aspect-square bg-accent-1 rounded-full"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;