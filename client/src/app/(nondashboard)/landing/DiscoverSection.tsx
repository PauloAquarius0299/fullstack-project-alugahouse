'use client'
import React from 'react'
import {motion} from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  

const DiscoverSection = () => {
  return (
    <motion.div 
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.8 }}
    variants={containerVariants}
    className='py-12 bg-white mb-16'
    >
        <div className='max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16'>
            <motion.div variants={itemVariants} className='text-center my-12'>
                <h2 className='text-3xl font-semibold leading-tight text-gray-800'>
                    Descobrir
                </h2>
                <p className='mt-4 text-lg text-gray-600'>
                    Encontre sua casa dos sonhos
                </p>
                <p className='mt-2 text-gray-500 max-w-3xl mx-auto'>
                    Descubra as melhores ofertas de imóveis em nossa plataforma. Navegue por uma ampla variedade de opções e encontre o lar perfeito para você e sua família.
                </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 text-center'>
                {[
                    {
                        imageSrc: "/landing-icon-wand.png",
                        title: "Descubra sua propriedade",
                        description: 'Explore uma ampla variedade de propriedades disponíveis para compra ou aluguel.',
                    },
                    {
                        imageSrc: "/landing-icon-calendar.png",
                        title: "Encontre seu lar ideal",
                        description: 'Navegue por uma seleção de imóveis que atendem às suas necessidades e preferências.',
                    },
                    {
                        imageSrc: "/landing-icon-heart.png",
                        title: "Aproveite sua nova casa",
                        description: 'Desfrute de um novo lar que atenda a todas as suas expectativas e desejos.',
                    },
                ].map((card, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <DiscoverCard {...card} />
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.div>
  )
};

const DiscoverCard = ({
    imageSrc,
    title,
    description,
  }: {
    imageSrc: string;
    title: string;
    description: string;
  }) => (
    <div className="px-4 py-12 shadow-lg rounded-lg bg-primary-50 md:h-72">
      <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
        <Image
          src={imageSrc}
          width={30}
          height={30}
          className="w-full h-full"
          alt={title}
        />
      </div>
      <h3 className="mt-4 text-xl font-medium text-gray-800">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );

export default DiscoverSection;