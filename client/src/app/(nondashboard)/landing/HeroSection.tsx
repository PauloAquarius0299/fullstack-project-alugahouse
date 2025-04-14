'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { setFilters } from '@/state'

const HeroSection = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleLocationSearch = async () => {
    try {
      const trimerdQuery = searchQuery.trim();
      if(!trimerdQuery) return;

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(trimerdQuery)}.json?access_token=${
        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        }&fuzzyMatch=true`
      );
      const data = await response.json();
      if(data.features && data.features.length > 0){
        const [lng, lat] = data.features[0].center;
        dispatch(
          setFilters({
            location: trimerdQuery,
            coordinates: [lat, lng]
          })
        );
        const params = new URLSearchParams({
          location: trimerdQuery,
          lat: lat.toString(),
          lng: lng.toString()
        });
        router.push(`/search?${params.toString()}`)
      }
    } catch (error) {
      console.log("error search location", error);
    }
  }

  return (
    <div className='relative h-screen'>
      {/* Imagem de fundo */}
      <Image 
        src='/landing-planashi.jpg'
        alt='Alugahouse plataform hero section'
        fill
        className='object-cover object-center'
        priority
      />
      
      {/* Overlay escuro */}
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>

      {/* Conteúdo centralizado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='absolute inset-0 flex flex-col items-center justify-center text-center px-4'
      >
        <div className='max-w-4xl w-full'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
            Comece sua jornada! Encontre um lugar perfeito para se tornar seu lar!
          </h1>
          <p className='text-lg sm:text-xl text-white mb-8'>
            Descubra o lugar perfeito para você viver sua viagem dos sonhos. Encontre o imóvel ideal para você e sua família, com conforto e segurança.
          </p>
          <div className='flex justify-center'>
            <Input 
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Pesquise a cidade, bairro e rua'
            className='w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12'
            />
            <Button 
            onClick={handleLocationSearch}
            className='bg-secondary-500 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-600 h-12'>
                Pesquisar
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroSection