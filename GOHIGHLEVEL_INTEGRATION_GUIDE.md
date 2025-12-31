# Founders Studio x GoHighLevel Integration Guide

This guide explains how to connect your custom Founders Studio website to GoHighLevel (GHL) so that all applications flow directly into your CRM, triggering your automation workflows.

## Strategy Overview

We are using the **Inbound Webhook** method. This is the most robust way to connect an external site to GHL.

1. **User submits application** on your Founders Studio site
2. **Data is sent** to a unique GHL Webhook URL
3. **GHL Workflow triggers** immediately
4. **Contact is created/updated** in GHL
5. **Automations run** (email, SMS, pipeline movement)

---

## Step 1: Create the Webhook in GoHighLevel

1. Log into your GoHighLevel account
2. Go to **Automation** > **Workflows**
3. Click **+ Create Workflow** > **Start from Scratch**
4. Name it: `Founders Studio - New Application`
5. Click **Add New Trigger**
6. Search for and select **Inbound Webhook** (Premium Trigger)
   * *Note: If you don't have Premium Triggers enabled, you can use Zapier/Make as a bridge, but direct Webhook is better.*
7. Copy the **Webhook URL** provided (it looks like `https://services.leadconnectorhq.com/hooks/...`)
8. **Keep this tab open** - you will need to test it in Step 3.

## Step 2: Configure Your Website

You need to add this Webhook URL to your website's configuration.

1. Open your project code
2. Create or edit the `.env` file in the `client` directory
3. Add this line:
   ```
   VITE_GOHIGHLEVEL_WEBHOOK=https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_URL_HERE
   ```
4. Replace `YOUR_WEBHOOK_URL_HERE` with the URL you copied in Step 1.

## Step 3: Map the Data (Test Submission)

1. Go back to your GHL Workflow
2. Click **Fetch Sample Requests** (it will start listening)
3. Go to your local website (or live site)
4. Fill out the Application form with test data and submit it
5. Go back to GHL - you should see "Request Received" with all your data fields
6. Click **Save Trigger**

## Step 4: Build the Workflow Actions

Now that GHL is receiving data, tell it what to do:

1. **Create/Update Contact**
   * Add Action: **Create/Update Contact**
   * Map the fields:
     * First Name -> `{{trigger.payload.firstName}}`
     * Last Name -> `{{trigger.payload.lastName}}`
     * Email -> `{{trigger.payload.email}}`
     * Phone -> `{{trigger.payload.phone}}`
     * Add Custom Fields for: `Budget`, `Timeline`, `Goals`, `Concerns` (you may need to create these in Settings > Custom Fields first)

2. **Add Tag**
   * Add Action: **Add Contact Tag**
   * Tag: `applicant-new`

3. **Create Opportunity**
   * Add Action: **Create/Update Opportunity**
   * Pipeline: `Sales Pipeline`
   * Stage: `New Lead`
   * Opportunity Name: `{{contact.name}} - {{trigger.payload.package}}`
   * Lead Value: `3500` (or dynamic based on package)

4. **Send Notification**
   * Add Action: **Internal Notification**
   * Send to: Assigned User (You)
   * Message: "New Application from {{contact.name}}!"

5. **Send Email to Lead**
   * Add Action: **Send Email**
   * Subject: "We received your application!"
   * Body: "Hi {{contact.first_name}}, thanks for applying to Founders Studio..."

6. **Publish & Save**
   * Toggle the workflow from **Draft** to **Publish**
   * Click **Save**

---

## Alternative: Embedding GHL Forms (Simpler)

If you don't want to use webhooks, you can embed a GHL form directly:

1. Go to **Sites** > **Forms** > **Builder**
2. Create a new form with all your questions
3. Style it to match your site (use CSS or GHL's styler)
4. Click **Integrate** > **Copy Embed Code**
5. Paste this code into your React application where the form should be

*Pros:* Easier setup, no webhook needed.
*Cons:* Harder to style perfectly to match your custom design.

## Troubleshooting

* **CORS Errors:** If you see CORS errors in the browser console, you may need to use a proxy or a backend function (like a Netlify Function or Vercel API route) to relay the request to GHL, as GHL webhooks sometimes block direct browser requests.
* **Missing Data:** Ensure your field names in the React `fetch` payload match exactly what you are mapping in GHL.

---

**Need help?**
If you get stuck, the "Embed Form" method is the fail-safe backup that always works.
