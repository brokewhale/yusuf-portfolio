import { Box, SkeletonCircle, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { memo, useEffect, useMemo } from 'react'
import { avatarAnimation } from 'config/animations'

const AvatarImages = {
  DarkMode: '/avatar-dark.png',
  LightMode: '/avatar-light.png',
}

declare global {
  interface Window {
    preloadedPictures?: HTMLImageElement[]
  }
}

const Avatar = () => {
  const imgAvatar = useColorModeValue(
    AvatarImages.LightMode,
    AvatarImages.DarkMode
  )

  // Memoize the preloading logic to avoid unnecessary re-runs
  const preloadImages = useMemo(() => {
    if (typeof window !== 'undefined') {
      const images = [AvatarImages.DarkMode, AvatarImages.LightMode]
      return images.map((imageSrc) => {
        const img = new window.Image()
        img.src = imageSrc
        return img
      })
    }
    return []
  }, [])

  useEffect(() => {
    // Cache the preloaded images
    if (preloadImages.length > 0) {
      window.preloadedPictures = preloadImages
    }
  }, [preloadImages])
  return (
    <Box
      as={motion.div}
      id="khAvatar"
      boxSize={{ base: 64, lg: 'sm' }}
      padding={{ base: 8 }}
      marginBottom={{ base: 10, md: 0, lg: 0 }}
      // @ts-ignore - Framer motion props
      initial="initial"
      animate={'animate'}
      variants={avatarAnimation}
    >
      <Image
        src={imgAvatar}
        alt="KH Yusuf Avatar"
        width={250}
        height={250}
        style={{ margin: 'auto', borderRadius: '50%' }}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyepckuNtlUSaUKWdXNsaHJ3lHYOFP3H8YXPV6dCLdBPn6aD8hYPH+lYFXdBAd3hppEOF7sF5ij5+hxB7OZR6pWfJYtZqBfEOGOg8IKvO3I8bBPKg7aDrG0qG3/rVJbDKtPnqyIo8+IXNGOvzr/AKAqMCGdg+ZSJGrUAHNm+mhXhzlGtKmOHBPj1EdLJL3mhN1GvEiPAGJmdNVIVm4f9WX7Gvr9jHHtfqhL8Xvr/9k="
        priority
      />
    </Box>
  )
}

export default memo(Avatar)
