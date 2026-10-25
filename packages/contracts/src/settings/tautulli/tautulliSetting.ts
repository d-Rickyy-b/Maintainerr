import z from 'zod'
import { serviceUrlSchema } from '../serviceUrl'

export const tautulliSettingSchema = z.object({
  url: serviceUrlSchema,
  api_key: z.string().trim().min(1, 'API key is required'),
  // Optional browser-facing address for links in the UI; empty means "use url".
  external_url: serviceUrlSchema.or(z.literal('')).optional(),
})

export type TautulliSetting = z.infer<typeof tautulliSettingSchema>
