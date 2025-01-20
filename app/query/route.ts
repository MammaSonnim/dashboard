import { db } from '@vercel/postgres';

const client = await db.connect();

// TODO edit somehow data, drop or migration
async function listInvoices() {
  // const data = await client.sql`
  //   SELECT invoices.amount, customers.name
  //   FROM invoices
  //   JOIN customers ON invoices.customer_id = customers.id
  //   WHERE invoices.amount = 666;
  // `;
  const data = await client.sql`
    DROP table customers;
  `;

  return data;
}

export async function GET() {
  try {
    Response.json(await listInvoices());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
