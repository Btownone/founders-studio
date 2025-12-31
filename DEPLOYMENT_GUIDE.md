# Founders Studio: Deployment & Integration Guide

This guide will help you launch your custom React website on Vercel and connect it to GoHighLevel.

---

## 🚀 Part 1: Deploy to Vercel (Free & Fast)

1. **Create a GitHub Repository**
  - Go to [GitHub.com](https://github.com) and create a new repository named `founders-studio`.
  - Upload all the files from this project to that repository. (If you need help with this, I can provide a zip file).

1. **Connect to Vercel**
  - Go to [Vercel.com](https://vercel.com) and sign up (it's free).
  - Click **"Add New..."** -> **"Project"**.
  - Select your `founders-studio` GitHub repository.
  - Click **"Deploy"**.

1. **Wait for Build**
  - Vercel will automatically build your site. In about 1 minute, it will give you a live URL (e.g., `founders-studio.vercel.app`).

   ![](https://private-us-east-1.manuscdn.com/user_upload_by_module/feedback/310519663168216516/WEspPPgDSERgKtSB.png?Expires=1798687437&Signature=Ei8J-aMqc~t9oiCS5ilE-l85SuDLyaFTfQVX4qv5xhQZY7a4xrTLnNWRW1-g~yI2HlLe3inrt0AXs7KHnQiL3VCCqhLM1cyzRjawRz6pGWELG3dQHfURRb3lqzu~fFvm0TTQosoJ8duYklWWivGBzRsb6tJ2rfQLFdrxbvvEqTiSi0u1fNHvYnUJCkD2r4A4ly48o0AgnyiKsalnkeDDmLRh-TgFxag1co5Cmc7uHUT3X4Y47Milzz7qppdaWbEvyUr5M7selSS43uqCd68Hf1EQLDvzRsgaBeFV7FNCJoBi9b-dAyQCQogy32cH82WZ8gfVtjeputu~6Wsw4o6Htg__&Key-Pair-Id=K2HSFNDJXOU9YS)

---

## 🔗 Part 2: Connect GoHighLevel (The Webhook)

1. **Create the Webhook in GHL**
  - Log in to GoHighLevel.
  - Go to **Automation** -> **Workflows** -> **Create Workflow**.
  - Select **"Start from Scratch"**.
  - Click **"Add New Trigger"** -> Select **"Inbound Webhook"**.
  - Copy the **Webhook URL** it gives you (it looks like `https://services.leadconnectorhq.com/hooks/...` ).

1. **Add Webhook to Vercel**
  - Go back to your project in Vercel.
  - Click **Settings** -> **Environment Variables**.
    - Add a new variable:
      - **Key:** `VITE_GOHIGHLEVEL_WEBHOOK`
      - **Value:** (Paste the URL you copied from GHL)
  - Click **Save**.
  - Go to **Deployments** and click **Redeploy** to apply the change.

---

## 🧪 Part 3: Test the Connection

1. Open your live Vercel website.

1. Go to the **Application** page.

1. Fill out the form with test data.

1. Click **Submit**.

1. Go back to your GHL Workflow.

1. Click **"Test Trigger"** -> **"Fetch Data"**.

1. You should see your test data appear!

1. **Save** and **Publish** your workflow.

---

## ✅ Done!

Your custom high-end site is now live and feeding leads directly into your GoHighLevel automation.

