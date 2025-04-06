'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  

const FeaturesSection = () => {
  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
    variants={containerVariants}
    className='py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white'
    >
        <div className='max-w-4xl xl:max-w-6xl mx-auto'>
            <motion.h2
            variants={itemVariants}
            className='text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto'
            >
                Encontre a casa dos seus sonhos com facilidade e rapidez!
            </motion.h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16'>
                {[0,1,2].map((index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <FeatureCard 
                        imageSrc={`/landing-search${3 - index}.png`}
                        title={
                            [
                                "Encontre o imóvel ideal",
                                "Explore as melhores opções",
                                "Descubra o seu novo lar",
                            ][index]
                        }
                        description={
                            [
                                "Navegue por uma ampla seleção de imóveis disponíveis para compra ou aluguel.",
                                "Pesquise e compare as melhores opções de imóveis em sua área.",
                                "Encontre o lar perfeito para você e sua família com facilidade.",
                            ][index]
                        }
                        linkText={["Explore", "Pesquise", "Descubra"][index]}
                        linkHref={["/explore", "/pesquise", "/descubra"][index]}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.div>
  )
};

const FeatureCard = ({
    imageSrc,
    title,
    description,
    linkText,
    linkHref,
}: {
    imageSrc: string;
    title: string;
    linkText: string;
    description: string;
    linkHref: string;
}) => (
    <div className='text-center'>
        <div className='p-4 rounded-lg mb-4 items-center justify-center h-48'>
            <Image 
            src={imageSrc}
            width={400}
            height={400}
            className='w-full h-full object-contain'
            alt={title}
            />
        </div>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='mb-4'>{description}</p>
        <Link
        href={linkHref}
        className='inline-block border border-gray-300 rounded px-4 py-2 hover:bg-gray-400'
        >
        {linkText}
        </Link>
    </div>
)

export default FeaturesSection