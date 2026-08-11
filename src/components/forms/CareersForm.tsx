"use client";

/**
 * Formulário "Trabalhe Conosco".
 * Mesmo padrão do QuoteForm: sem integração de backend real. Ver comentário em
 * QuoteForm.tsx para orientação de como conectar a um endpoint real no futuro.
 */

import { useState, type FormEvent } from "react";
import { Field, TextInput } from "@/components/forms/fields";
import { Button } from "@/components/ui/Button";

export function CareersForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO(integração): enviar os dados do formulário (incluindo o currículo) para um
    // endpoint próprio (ex.: /api/trabalhe-conosco) responsável pelo envio a RH.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-2xl border border-accent/30 bg-accent-soft p-8 text-center">
        <h2 className="font-display text-xl font-semibold text-navy">Currículo recebido.</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Obrigado pelo interesse em fazer parte da ORB. Retornaremos caso surja uma oportunidade compatível.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      <Field label="Nome" htmlFor="nome-trabalhe" required>
        <TextInput id="nome-trabalhe" name="nome" required autoComplete="name" />
      </Field>
      <Field label="E-mail" htmlFor="email-trabalhe" required>
        <TextInput id="email-trabalhe" name="email" type="email" required autoComplete="email" />
      </Field>
      <Field label="Telefone" htmlFor="telefone-trabalhe" required>
        <TextInput id="telefone-trabalhe" name="telefone" type="tel" required autoComplete="tel" />
      </Field>
      <Field label="Cidade" htmlFor="cidade-trabalhe" required>
        <TextInput id="cidade-trabalhe" name="cidade" required autoComplete="address-level2" />
      </Field>
      <Field label="Área de interesse" htmlFor="area-trabalhe" className="sm:col-span-2">
        <TextInput id="area-trabalhe" name="area" placeholder="Ex: Comercial, Assistência Técnica, Administrativo" />
      </Field>
      <Field label="Currículo" htmlFor="curriculo-trabalhe" required className="sm:col-span-2">
        <input
          id="curriculo-trabalhe"
          name="curriculo"
          type="file"
          accept=".pdf,.doc,.docx"
          required
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink file:mr-4 file:rounded-full file:border-0 file:bg-navy file:px-4 file:py-2 file:text-sm file:font-medium file:text-white"
        />
      </Field>
      <div className="sm:col-span-2">
        <Button type="submit" variant="accent" className="w-full sm:w-auto">
          Enviar currículo
        </Button>
      </div>
    </form>
  );
}
