import { useEffect } from 'react'
import { COMPANY_NAME, site } from '../data/site'

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = `${title} | ${COMPANY_NAME}`
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', `${title} | ${COMPANY_NAME}`)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', window.location.href)
    setMeta('property', 'og:site_name', site.name)
  }, [title, description])
}

function setMeta(attribute, key, value) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}
