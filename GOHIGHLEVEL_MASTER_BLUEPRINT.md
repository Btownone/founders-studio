# Founders Studio: GoHighLevel Master Blueprint

**Role:** GoHighLevel Architect
**Objective:** Build the complete High-Ticket Application Funnel in GoHighLevel (GHL).

---

## 🏗️ Phase 1: The Architecture (Setup)

Before building pages, we must set up the "container" for your business.

### 1. Sub-Account Selection
*   **Action:** Log in to GHL > Click top-left dropdown > Select **"Founders Studio"** (or create it if it doesn't exist).
*   *Note: Do not build this in the "Agency" view. You must be in a Sub-Account.*

### 2. Pipeline Setup (The Sales Process)
Go to **Opportunities** > **Pipelines** > **Create New Pipeline**.
*   **Name:** `Founders Studio Sales`
*   **Stage 1:** `New Lead` (Opted in for Blueprint)
*   **Stage 2:** `Application Received` (Completed Typeform/GHL Form)
*   **Stage 3:** `Qualified - Green Light` (Ready for call)
*   **Stage 4:** `Call Booked`
*   **Stage 5:** `Closed Won` ($3.5k/$5k collected)
*   **Stage 6:** `Lost/Nurture`

### 3. Custom Fields (Data Collection)
Go to **Settings** > **Custom Fields** > **Add Field**.
Create these fields so you can store application answers:
*   `Current Income` (Text)
*   `Investment Budget` (Dropdown: $2k-4k, $5k+, etc.)
*   `Biggest Struggle` (Text)
*   `Why Now` (Text)

---

## 🎨 Phase 2: The Funnel (Sites)

Go to **Sites** > **Funnels** > **Create New Funnel**.
*   **Name:** `Founders Studio - Main Application Funnel`

### Step 1: Landing Page (The Sales Page)
*   **Path:** `/home` or `/`
*   **Goal:** Sell the "Apply" click.
*   **Build:** Use the Drag-and-Drop builder.
    *   **Hero:** Headline "Stop Worrying About Tech. Start Selling." + Subhead + Button "Apply to Launch".
    *   **Sections:** Recreate the 7 sections from our React design (Why Women Quit, What You Get, Proof, etc.).
    *   **Popup:** Create a Popup that opens on button click. Inside, put a **Form** (Name/Email) to capture the lead *before* the full application.

### Step 2: Application Page (The Gate)
*   **Path:** `/apply`
*   **Goal:** Qualify the lead.
*   **Build:**
    *   Embed a **GHL Form** (or Typeform) here.
    *   **Form Name:** `Founders Application`
    *   **Fields:** Name, Email, Phone, + The Custom Fields we created in Phase 1.
    *   **Redirect:** On submit -> Go to Next Step.

### Step 3: Booking / Thank You (The Commitment)
*   **Path:** `/booking`
*   **Goal:** Get them on the phone.
*   **Build:**
    *   Embed a **GHL Calendar** element.
    *   Headline: "Application Received! Choose a time for your Founder Strategy Call."

---

## ⚡ Phase 3: The Engine (Automation)

Go to **Automation** > **Workflows** > **Create Workflow**.

### Workflow A: "New Application Received"
*   **Trigger:** `Form Submitted` (Form is: Founders Application)
*   **Action 1:** `Create/Update Opportunity` -> Pipeline: Founders Studio Sales -> Stage: Application Received.
*   **Action 2:** `Internal Notification` -> Email to You -> "New App from {{contact.name}}!"
*   **Action 3:** `Send Email` -> To Lead -> "We received your application! (Next Steps)"

### Workflow B: "Nurture Sequence" (For Leads who didn't apply)
*   **Trigger:** `Form Submitted` (Popup Form on Landing Page)
*   **Wait:** 1 Hour
*   **Condition:** If `Contact Tag` DOES NOT include "applied"
*   **Action:** Send Email -> "Did you see this?" (Link back to application)

---

## 🚀 Execution Checklist

1.  [ ] Create the **Sub-Account**.
2.  [ ] Create the **Pipeline** stages.
3.  [ ] Build the **3 Funnel Pages** in "Sites".
4.  [ ] Create the **Application Form** in "Sites > Forms".
5.  [ ] Turn on the **Workflows** in "Automation".
6.  [ ] Connect your **Domain** in "Settings > Domains".
7.  [ ] Connect **Stripe** in "Payments > Integrations".

This is your blueprint. You can build this exact structure in GHL in about 60-90 minutes.
