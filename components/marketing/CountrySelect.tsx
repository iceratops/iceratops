'use client'

import { type KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react'
import { useI18n } from '@/components/i18n/I18nProvider'
import { countries } from '@/content/countries'
import { fieldLimits } from '@/lib/contact-form'
import { useDocumentLanguage } from '@/lib/use-document-language'

function searchable(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

type CountrySelectProps = {
  className: string
  error?: string
  onValueChange: (value: string) => void
}

export function CountrySelect({ className, error, onValueChange }: CountrySelectProps) {
  const { t } = useI18n()
  const [value, setValue] = useState('')
  const [selection, setSelection] = useState<(typeof countries)[number]>()
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const language = useDocumentLanguage()
  const localizedCountries = useMemo(() => {
    // The server and browser may ship different CLDR versions. Reuse the fixed
    // English list for hydration; other languages are selected after mounting.
    if (language === 'en') return countries.map((country) => ({ ...country, label: country.name }))
    const names = new Intl.DisplayNames([language, 'en'], { type: 'region' })
    return countries
      .map((country) => ({ ...country, label: names.of(country.code) ?? country.name }))
      .sort((left, right) => left.label.localeCompare(right.label, language))
  }, [language])
  const selectedLabel = localizedCountries.find(
    (country) => country.code === selection?.code,
  )?.label
  const query = selection ? '' : searchable(value)
  function matchPriority(country: (typeof localizedCountries)[number]) {
    if (country.code.toLowerCase() === query) return 0
    return searchable(country.label).startsWith(query) || searchable(country.name).startsWith(query)
      ? 1
      : 2
  }
  const matches = localizedCountries
    .filter(
      (country) =>
        searchable(country.label).includes(query) ||
        searchable(country.name).includes(query) ||
        country.code.toLowerCase() === query,
    )
    .sort((left, right) => matchPriority(left) - matchPriority(right))
  const activeCountry = matches[activeIndex]

  useEffect(() => {
    if (!open || !activeCountry) return
    const list = listRef.current
    const option = list?.querySelector<HTMLElement>('[aria-selected="true"]')
    if (!list || !option) return
    // Scroll only the choices, preserving the visitor's position in the form.
    if (option.offsetTop < list.scrollTop) list.scrollTop = option.offsetTop
    else if (option.offsetTop + option.offsetHeight > list.scrollTop + list.clientHeight)
      list.scrollTop = option.offsetTop + option.offsetHeight - list.clientHeight
  }, [open, activeCountry])

  function selectCountry(country: (typeof countries)[number]) {
    setValue('')
    setSelection(country)
    setActiveIndex(-1)
    onValueChange(country.name)
    inputRef.current?.focus()
    setOpen(false)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.isComposing) return
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      setOpen(true)
      setActiveIndex((current) => {
        if (!open || current < 0) return event.key === 'ArrowDown' ? 0 : matches.length - 1
        return Math.max(
          0,
          Math.min(matches.length - 1, current + (event.key === 'ArrowDown' ? 1 : -1)),
        )
      })
    } else if (event.key === 'Enter' && open) {
      event.preventDefault()
      if (activeCountry) selectCountry(activeCountry)
    } else if (event.key === 'Escape' && open) {
      event.preventDefault()
      setOpen(false)
      setActiveIndex(-1)
    } else if (event.key === 'Tab') {
      setOpen(false)
      setActiveIndex(-1)
    }
  }

  return (
    <div className="relative">
      {/* Keep submission values stable when the visible label is translated. */}
      <input name="region" type="hidden" value={selection?.name ?? value} />
      <input
        aria-activedescendant={
          open && activeCountry ? `region-option-${activeCountry.code}` : undefined
        }
        aria-autocomplete="list"
        aria-controls="region-options"
        aria-describedby={error ? 'region-error' : undefined}
        aria-expanded={open}
        aria-invalid={Boolean(error)}
        autoCapitalize="none"
        autoComplete="off"
        className={`${className} pe-10`}
        data-contact-field="region"
        dir="auto"
        id="region"
        maxLength={fieldLimits.region}
        onBlur={(event) => {
          if (listRef.current?.contains(event.relatedTarget)) {
            event.stopPropagation()
            return
          }
          setOpen(false)
          setActiveIndex(-1)
        }}
        onChange={(event) => {
          setValue(event.target.value)
          setSelection(undefined)
          setOpen(true)
          setActiveIndex(0)
          onValueChange(event.target.value)
        }}
        onClick={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={t('Search countries or regions')}
        ref={inputRef}
        role="combobox"
        spellCheck={false}
        type="text"
        value={selectedLabel ?? value}
      />
      <span aria-hidden="true" className="pointer-events-none absolute end-4 top-5 text-slate-400">
        ⌄
      </span>
      <div
        className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-lg border border-white/20 bg-slate-950 shadow-xl"
        hidden={!open}
      >
        <div
          aria-label={t('Countries and regions')}
          className="relative max-h-60 overflow-y-auto overscroll-contain p-1"
          id="region-options"
          ref={listRef}
          role="listbox"
        >
          {matches.map((country, index) => (
            <button
              aria-selected={index === activeIndex}
              className={`block min-h-11 w-full rounded-md px-3 py-2 text-start text-base leading-6 hover:bg-white/10 ${
                index === activeIndex ? 'bg-amber-300/15 text-amber-200' : 'text-white'
              }`}
              id={`region-option-${country.code}`}
              key={country.code}
              onClick={() => selectCountry(country)}
              onMouseDown={(event) => event.preventDefault()}
              role="option"
              tabIndex={-1}
              type="button"
              lang={language}
              translate="no"
            >
              {t(country.label)}
            </button>
          ))}
        </div>
        {matches.length === 0 && (
          <p className="px-4 py-3 text-sm text-slate-300" role="status">
            {t('No countries found. Try another name or a two-letter country code.')}
          </p>
        )}
      </div>
    </div>
  )
}
