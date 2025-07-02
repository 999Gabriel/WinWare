"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { CodeXml, Users, Rocket, Diamond, Crown, Award, Check, Star, Gem } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/section-title';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  premium?: boolean;
}

interface PricingTier {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  icon: LucideIcon;
}

interface EquityModel {
  name: string;
  description: string;
  equityRange: string;
  bestFor: string[];
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: 'Custom Software Development',
    description: 'Bespoke software tailored to your business. From complex platforms to lean MVPs — reliable, scalable, clean.',
    icon: CodeXml,
  },
  {
    title: 'Scalable Development Teams',
    description: 'Top-tier engineers ready to integrate with your existing structure. Scale your tech capacity without compromise.',
    icon: Users,
  },
  {
    title: 'Startup Partnership Model',
    description: 'We collaborate with innovative startups. Our equity-based model means we grow alongside you — aligned for success.',
    icon: Rocket,
    premium: true,
  },
  {
    title: 'Enterprise Solutions',
    description: 'Comprehensive digital systems for established companies. We drive efficiency, performance, and innovation.',
    icon: Diamond,
    premium: true,
  },
];

const pricingTiers: PricingTier[] = [
  {
    name: "Standard",
    description: "Fixed-price project delivery with clear milestones.",
    price: "Custom quote",
    features: [
      "Detailed project scope",
      "Regular progress updates",
      "30 days post-launch support"
    ],
    icon: Check
  },
  {
    name: "Premium",
    description: "Enhanced support with dedicated resources.",
    price: "Custom quote",
    features: [
      "Everything in Standard",
      "Dedicated project manager",
      "Priority support",
      "90 days post-launch support"
    ],
    highlighted: true,
    icon: Star
  },
  {
    name: "Enterprise",
    description: "Strategic consulting & long-term partnership.",
    price: "Custom quote",
    features: [
      "Everything in Premium",
      "Dedicated development team",
      "Ongoing strategic tech advisory",
      "1 year extended support"
    ],
    icon: Crown
  }
];

const equityModels: EquityModel[] = [
  {
    name: "Seed Stage Partnership",
    description: "For early-stage startups with promising concepts but limited funding. We contribute development expertise in exchange for equity.",
    equityRange: "5-15%",
    bestFor: [
      "Pre-seed and seed stage startups",
      "MVP development",
      "Product validation phase"
    ],
    icon: Rocket
  },
  {
    name: "Growth Accelerator",
    description: "For startups with validated products seeking to scale. We provide technical expertise and strategic guidance for equity plus reduced rates.",
    equityRange: "2-8%",
    bestFor: [
      "Series A/B startups",
      "Scaling technical infrastructure",
      "Market expansion initiatives"
    ],
    icon: Award
  },
  {
    name: "Strategic Alliance",
    description: "For established startups with significant traction. We form a long-term partnership with a combination of equity and standard rates.",
    equityRange: "1-5%",
    bestFor: [
      "Later stage startups",
      "Enterprise-level solutions",
      "Long-term technology partnerships"
    ],
    icon: Gem
  }
];

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };

  // Custom animation for floating effect with different timings for each card
  const floatingAnimations = [
    { y: [-5, 5, -5], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
    { y: [-7, 3, -7], transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } },
    { y: [-3, 6, -3], transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 } },
    { y: [-4, 7, -4], transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.75 } },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-platinum/5 rounded-full blur-3xl"
          />

          <SectionTitle title="Our Services" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title} 
              variants={cardVariants}
              animate={floatingAnimations[index % floatingAnimations.length]}
            >
              <Card className={`relative overflow-hidden backdrop-blur-sm transition-all duration-500 transform hover:-translate-y-3 group h-full
                ${service.premium 
                  ? "bg-gradient-to-br from-black/90 to-card/90 border-gold/40 hover:border-gold hover:shadow-xl hover:shadow-gold/20" 
                  : "bg-gradient-to-br from-black/80 to-card/80 border-primary/30 hover:border-primary/70 hover:shadow-xl hover:shadow-primary/30"
                }`}
              >
                {/* Animated glow effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
                  ${service.premium 
                    ? "bg-gradient-to-br from-gold/10 to-platinum/10" 
                    : "bg-gradient-to-br from-primary/5 to-accent/5"
                  }`}
                />

                {/* Premium badge for premium services */}
                {service.premium && (
                  <div className="absolute top-3 right-3 z-20">
                    <Badge className="bg-gold text-black font-semibold animate-gold-glow border-0">
                      PREMIUM
                    </Badge>
                  </div>
                )}

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 -translate-x-10 -translate-y-10 transform rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700
                  ${service.premium 
                    ? "bg-gradient-to-bl from-gold/20 to-platinum/20" 
                    : "bg-gradient-to-bl from-primary/20 to-accent/20"
                  }`}
                />

                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                  <CardTitle className={`text-xl font-headline font-medium text-transparent bg-clip-text transition-all duration-500
                    ${service.premium 
                      ? "bg-gradient-to-r from-gold to-platinum group-hover:from-platinum group-hover:to-gold" 
                      : "bg-gradient-to-r from-primary to-accent group-hover:from-accent group-hover:to-primary"
                    }`}
                  >
                    {service.title}
                  </CardTitle>
                  <div className={`p-2 rounded-full transition-colors duration-500
                    ${service.premium 
                      ? "bg-gold/10 group-hover:bg-gold/20" 
                      : "bg-primary/10 group-hover:bg-primary/20"
                    }`}
                  >
                    <service.icon className={`h-8 w-8 transition-colors duration-500
                      ${service.premium 
                        ? "text-gold group-hover:text-platinum" 
                        : "text-primary group-hover:text-accent"
                      }`}
                    />
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-base text-foreground/80 group-hover:text-foreground/90 transition-colors duration-500">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing and Partnership Models Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gold to-platinum">
              Engagement Models
            </h3>
            <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
              Flexible partnership options designed to meet your specific needs
            </p>
          </motion.div>

          <Tabs defaultValue="pricing" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="pricing" className="text-lg">Payment Models</TabsTrigger>
              <TabsTrigger value="equity" className="text-lg">Equity Partnerships</TabsTrigger>
            </TabsList>

            <TabsContent value="pricing" className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {pricingTiers.map((tier, index) => (
                  <motion.div 
                    key={tier.name} 
                    variants={cardVariants}
                    className={index === 1 ? "-mt-4 mb-4 md:mt-0 md:mb-0" : ""}
                  >
                    <Card className={`relative overflow-hidden backdrop-blur-sm border transition-all duration-500 h-full
                      ${tier.highlighted 
                        ? "bg-gradient-to-br from-black/90 to-card/90 border-gold/40 hover:border-gold animate-gold-glow" 
                        : "bg-gradient-to-br from-black/80 to-card/80 border-primary/30 hover:border-primary/70"
                      }`}
                    >
                      {tier.highlighted && (
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-platinum to-gold" />
                      )}

                      <CardHeader className="relative z-10">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className={`text-2xl font-headline font-medium
                              ${tier.highlighted 
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-gold to-platinum" 
                                : "text-primary"
                              }`}
                            >
                              {tier.name}
                            </CardTitle>
                            <CardDescription className="mt-1.5 text-foreground/70">
                              {tier.description}
                            </CardDescription>
                          </div>
                          <div className={`p-2 rounded-full
                            ${tier.highlighted 
                              ? "bg-gold/10" 
                              : "bg-primary/10"
                            }`}
                          >
                            <tier.icon className={`h-6 w-6
                              ${tier.highlighted 
                                ? "text-gold" 
                                : "text-primary"
                              }`}
                            />
                          </div>
                        </div>
                        <div className="mt-6">
                          <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                        </div>
                      </CardHeader>

                      <CardContent className="relative z-10">
                        <ul className="space-y-3">
                          {tier.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <Check className={`h-5 w-5 mr-2 flex-shrink-0
                                ${tier.highlighted 
                                  ? "text-gold" 
                                  : "text-primary"
                                }`}
                              />
                              <span className="text-foreground/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>

                      <CardFooter className="relative z-10">
                        <button className={`w-full py-2.5 px-4 rounded-md font-medium transition-all duration-300
                          ${tier.highlighted 
                            ? "bg-gradient-to-r from-gold to-platinum text-black hover:shadow-lg hover:shadow-gold/20" 
                            : "bg-primary/20 text-primary hover:bg-primary/30"
                          }`}
                        >
                          Contact Us
                        </button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="equity" className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {equityModels.map((model, index) => (
                  <motion.div 
                    key={model.name} 
                    variants={cardVariants}
                  >
                    <Card className="relative overflow-hidden bg-gradient-to-br from-black/80 to-card/80 backdrop-blur-sm border-gold/30 hover:border-gold/70 transition-all duration-500 h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-platinum/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                      <CardHeader className="relative z-10">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-2xl font-headline font-medium text-transparent bg-clip-text bg-gradient-to-r from-gold to-platinum">
                            {model.name}
                          </CardTitle>
                          <div className="p-2 rounded-full bg-gold/10">
                            <model.icon className="h-6 w-6 text-gold" />
                          </div>
                        </div>
                        <div className="mt-4 inline-block px-3 py-1 bg-gold/10 rounded-full">
                          <span className="text-gold font-semibold">{model.equityRange} Equity</span>
                        </div>
                        <CardDescription className="mt-4 text-foreground/70">
                          {model.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="relative z-10">
                        <h4 className="text-sm uppercase tracking-wider text-gold mb-3">Best For:</h4>
                        <ul className="space-y-2">
                          {model.bestFor.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="h-5 w-5 mr-2 text-gold flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>

                      <CardFooter className="relative z-10">
                        <button className="w-full py-2.5 px-4 rounded-md bg-gradient-to-r from-gold/20 to-platinum/20 text-gold hover:from-gold/30 hover:to-platinum/30 font-medium transition-all duration-300">
                          Discuss Partnership
                        </button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
