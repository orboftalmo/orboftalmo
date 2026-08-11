"use client";

/**
 * Formulário de solicitação de orçamento.
 *
 * Este formulário está pronto para integração futura (API route própria, envio por
 * e-mail transacional, webhook para CRM/Leads2B, etc.). Nenhuma integração real foi
 * criada — o envio é tratado inteiramente no cliente para não simular uma conexão com
 * um backend que não existe. Para ligar a um backend real, troque o corpo da função
 * `handleSubmit` por uma chamada a uma API route (ex: `POST /api/orcamento`) que
 * encaminhe os dados para e-mail/CRM.
 */

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Field, TextInput, TextArea, Select } from "@/components/forms/fields";
import { Button } from "@/components/ui/Button";
import { brazilianStates } from "@/lib/brazil-states";
import { products } from "@/content/products";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get("produto") ?? "";
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!consent) {
      setError("É necessário aceitar o contato da ORB para enviar a solicitação.");
      return;
    }

    // TODO(integração): enviar `new FormData(event.currentTarget)` para uma API route
    // própria (ex.: /api/orcamento) que faça o envio por e-mail e/ou para o CRM da ORB.
    setError(null);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-accent/30 bg-accent-soft p-8 text-center"
      >
        <h2 className="font-display text-xl font-semibold text-navy">
          Recebemos sua solicitação.
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Nossa equipe entrará em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2" noValidate>
      <Field label="Nome" htmlFor="nome" required>
        <TextInput id="nome" name="nome" required autoComplete="name" />
      </Field>
      <Field label="CRM" htmlFor="crm">
        <TextInput id="crm" name="crm" placeholder="Ex: CRM/MG 00000" />
      </Field>

      <Field label="Especialidade" htmlFor="especialidade">
        <TextInput id="especialidade" name="especialidade" placeholder="Ex: Oftalmologia" />
      </Field>
      <Field label="Clínica / Hospital" htmlFor="instituicao">
        <TextInput id="instituicao" name="instituicao" autoComplete="organization" />
      </Field>

      <Field label="Cidade" htmlFor="cidade" required>
        <TextInput id="cidade" name="cidade" required autoComplete="address-level2" />
      </Field>
      <Field label="Estado" htmlFor="estado" required>
        <Select id="estado" name="estado" required defaultValue="MG" autoComplete="address-level1">
          {brazilianStates.map((uf) => (
            <option key={uf} value={uf}>
              {uf}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Telefone" htmlFor="telefone" required>
        <TextInput id="telefone" name="telefone" type="tel" required autoComplete="tel" />
      </Field>
      <Field label="WhatsApp" htmlFor="whatsapp">
        <TextInput id="whatsapp" name="whatsapp" type="tel" />
      </Field>

      <Field label="E-mail" htmlFor="email" required className="sm:col-span-2">
        <TextInput id="email" name="email" type="email" required autoComplete="email" />
      </Field>

      <Field label="Produto de interesse" htmlFor="produto">
        <TextInput
          id="produto"
          name="produto"
          list="produtos-lista"
          defaultValue={prefilledProduct}
          placeholder="Digite ou selecione um produto"
        />
        <datalist id="produtos-lista">
          {products.map((product) => (
            <option key={product.slug} value={product.name} />
          ))}
        </datalist>
      </Field>
      <Field label="Quantidade" htmlFor="quantidade">
        <TextInput id="quantidade" name="quantidade" type="number" min={1} defaultValue={1} />
      </Field>

      <Field label="Mensagem" htmlFor="mensagem" className="sm:col-span-2">
        <TextArea id="mensagem" name="mensagem" rows={5} />
      </Field>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm text-ink-soft">
          <input
            type="checkbox"
            name="consentimento"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-line text-navy focus-visible:outline-2 focus-visible:outline-accent"
            required
          />
          Aceito receber contato da ORB para tratar desta solicitação.
        </label>
        {error && (
          <p role="alert" className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" variant="accent" className="w-full sm:w-auto">
          Solicitar orçamento
        </Button>
      </div>
    </form>
  );
}
