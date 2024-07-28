"use client"

import Image from 'next/image'
import { StyledHome } from './styles'
import { Card } from '@/components/Card'
import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { CaretDoubleUp } from '@phosphor-icons/react'

interface ListPokeType {
  count: number
  next: string
  previous: null | [
    {
      name: string
      url: string
    }],
  results: [{
    name: string
    url: string
  }]
}

export default function Home() {
  const [pokemons, setPokemons] = useState<ListPokeType>()
  const [backTopScroll, setBackTopScroll] = useState<boolean>(false)
  const [renderLimited, setRenderLimited] = useState({
    start: 0,
    end: 32
  })

  useEffect(() => {
    api.get(`pokemon/?offset=${renderLimited.start}&limit=${renderLimited.end}`).then(resp => {
      setPokemons(resp.data)
    })

    document.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 300 && !backTopScroll) {
        setBackTopScroll(true)
        return
      }

      setBackTopScroll(false)
    })
  }, [renderLimited])

  function amountPokeCards() {
    setRenderLimited((state) => {
      return {
        ...state,
        end: state.end + 32
      }
    })
  }

  function handleBackTopScroll() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <StyledHome>
      <div>
        <h1>Poke<span>Next</span></h1>

        <Image src='/pokeball.png' alt='' width={50} height={50} />
      </div>

      {backTopScroll && <button onClick={handleBackTopScroll} type='button' title='Back Top'><CaretDoubleUp size={32} /></button>}

      {pokemons ? (
        <ul>
          {pokemons.results.map((pokemon, index) => {
            return (
              <Card
                key={pokemon.name}
                endCard={index === renderLimited.end - 1}
                url={pokemon.url}
                amountPokeCards={amountPokeCards}
              />
            )
          })}
        </ul>
      ) : (
        <p>Carregando..</p>
      )}
    </StyledHome>
  )
}