"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    THREE?: any
    gsap?: any
  }
}

export function CosmicScene() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount || !window.THREE) {
      return
    }

    const THREE = window.THREE
    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x040612, 8, 50)

    const camera = new THREE.PerspectiveCamera(70, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.z = 10

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const starsGeometry = new THREE.BufferGeometry()
    const starCount = 3000
    const positions = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 120
      positions[i3 + 1] = (Math.random() - 0.5) * 120
      positions[i3 + 2] = (Math.random() - 0.5) * 120
    }

    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xc8d5ff,
      size: 0.14,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    const nebulaGeometry = new THREE.IcosahedronGeometry(2.8, 16)
    const nebulaMaterial = new THREE.MeshStandardMaterial({
      color: 0x6d5cff,
      emissive: 0x3a2db0,
      emissiveIntensity: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })

    const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial)
    scene.add(nebula)

    const ambient = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambient)

    const pointLight = new THREE.PointLight(0xaad4ff, 4, 100)
    pointLight.position.set(8, 12, 10)
    scene.add(pointLight)

    const animate = () => {
      stars.rotation.y += 0.0008
      stars.rotation.x += 0.0002
      nebula.rotation.x += 0.002
      nebula.rotation.y += 0.003
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    let frameId = requestAnimationFrame(animate)

    const onResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }

    window.addEventListener("resize", onResize)

    if (window.gsap) {
      window.gsap.to(camera.position, {
        z: 8,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", onResize)
      renderer.dispose()
      starsGeometry.dispose()
      starsMaterial.dispose()
      nebulaGeometry.dispose()
      nebulaMaterial.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 opacity-80" aria-hidden="true" />
}
