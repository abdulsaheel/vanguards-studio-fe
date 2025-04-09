import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Users size={32} />,
      title: "Client-First Approach",
      description: "We prioritize our clients' needs and goals, ensuring every solution is tailored to their specific requirements."
    },
    {
      icon: <Target size={32} />,
      title: "Excellence in Execution",
      description: "We maintain the highest standards in our work, from the first line of code to the final pixel."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation Focus",
      description: "We stay ahead of digital trends, bringing cutting-edge solutions to every project we undertake."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2340"
    },
    {
      name: "Michael Torres",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2340"
    },
    {
      name: "Emma Wilson",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2340"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-display leading-tight mb-8">
              About Us
            </h1>
            <p className="text-xl text-accent-2 mb-12 max-w-2xl">
              We're a team of designers, developers, and digital strategists passionate about creating exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-accent-1/20">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display mb-4">Our Values</h2>
            <p className="text-accent-2 max-w-2xl mx-auto">
              These core principles guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-background p-8 rounded-2xl text-center"
              >
                <div className="text-accent-highlight mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-display mb-4">{value.title}</h3>
                <p className="text-accent-2">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display mb-4">Our Team</h2>
            <p className="text-accent-2 max-w-2xl mx-auto">
              Meet the creative minds behind vanguards.studio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-2xl font-display mb-2">{member.name}</h3>
                <p className="text-accent-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-foreground text-background">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-display mb-8">Our Story</h2>
            <p className="text-xl mb-6">
              Founded in 2025, vanguards.studio emerged from a simple belief: digital experiences should be both beautiful and functional.
            </p>
            <p className="text-accent-1 mb-6">
              Today, we continue to push boundaries in digital design and development, helping brands achieve their full potential in the digital space.
            </p>
            <a
              href="/contact"
              className="btn bg-background text-foreground hover:bg-accent-1"
            >
              Join Our Journey
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;