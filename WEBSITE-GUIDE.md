
# Website Guide: Satellite Company

This guide is designed to help non-technical users understand the structure of the website and how to make basic changes. Each section explains a component of the website and how to modify it.

## Table of Contents
1. [Website Structure](#website-structure)
2. [How to Make Changes](#how-to-make-changes)
3. [Page Components](#page-components)
4. [Common Tasks](#common-tasks)

## Website Structure

The website is built using React, a popular JavaScript library for building user interfaces. The entire site is structured as components that can be reused across different pages. Here's a breakdown of the main components:

### Layout Components
- **Navbar**: The top navigation bar that appears on every page
- **Footer**: The bottom section that appears on every page
- **Layout**: A wrapper component that includes both the Navbar and Footer

### Section Components
- **Hero**: The large banner at the top of the homepage
- **ContentSection**: Text sections with a title and paragraph
- **FeatureGrid**: The three-column grid showing features/products
- **StatsSection**: The section displaying statistics
- **ContactSection**: The "Get in Touch" section with contact information

### UI Components
- **ContactInfo**: Displays contact details and social media links

## How to Make Changes

To make changes to the website, you'll need to modify the appropriate component files. Here's how to locate and edit them:

1. All component files are in the `src/components` directory
2. Layout components (Navbar, Footer) are in `src/components/layout`
3. Section components are in `src/components/sections`
4. UI components are in `src/components/ui`
5. Page components are in `src/pages`

## Page Components

### Homepage (Index.tsx)
The homepage is composed of several sections:

1. **Hero Section**: The banner at the top with a heading and intro text
2. **Content Sections**: Text blocks with headings and paragraphs
3. **Feature Grid**: Three columns showing features/products
4. **Stats Section**: Numbers and labels highlighting key statistics
5. **Contact Section**: Contact information and social media links

### How to Edit Specific Components

#### Navbar
- **File**: `src/components/layout/Navbar.tsx`
- **Changes you can make**:
  - Update logo (replace the gray circle)
  - Change navigation links (Services, Contact, View Products)
  - Modify button text and colors

#### Footer
- **File**: `src/components/layout/Footer.tsx`
- **Changes you can make**:
  - Update column titles
  - Change footer links in each column
  - Modify copyright text

#### Hero Section
- **File**: `src/components/sections/Hero.tsx`
- **Changes you can make**:
  - Update the heading text
  - Change the introductory paragraph
  - Adjust spacing and layout

#### Content Sections
- **Content defined in**: `src/pages/Index.tsx`
- **Component file**: `src/components/sections/ContentSection.tsx`
- **Changes you can make**:
  - Update titles and paragraph text
  - Add or remove content sections
  - Change text alignment

#### Feature Grid
- **Content defined in**: `src/pages/Index.tsx`
- **Component file**: `src/components/sections/FeatureGrid.tsx`
- **Changes you can make**:
  - Replace placeholder images with actual images
  - Update feature descriptions
  - Add or remove features

#### Stats Section
- **Content defined in**: `src/pages/Index.tsx`
- **Component file**: `src/components/sections/StatsSection.tsx`
- **Changes you can make**:
  - Update statistic values and labels
  - Change the description text
  - Add or remove statistics

#### Contact Section
- **File**: `src/components/sections/ContactSection.tsx`
- **Contact info component**: `src/components/ui/ContactInfo.tsx`
- **Changes you can make**:
  - Update heading and introduction text
  - Change contact information (address, email, phone, fax, hours)
  - Update social media links

## Common Tasks

### How to Update Contact Information
1. Open `src/components/ui/ContactInfo.tsx`
2. Find the information you want to update (address, email, phone, etc.)
3. Replace the text with your new information
4. Save the file

### How to Change Navigation Links
1. Open `src/components/layout/Navbar.tsx`
2. Find the `<Link>` components in the code
3. Update the `to` attribute with the new URL path
4. Change the text between the opening and closing tags
5. Save the file

### How to Update Social Media Links
1. Open `src/components/ui/ContactInfo.tsx`
2. Find the social media section (near the bottom)
3. Update the `href` attributes in the `<a>` tags with your social media URLs
4. Save the file

### How to Add a New Page
1. Create a new file in the `src/pages` directory (e.g., `About.tsx`)
2. Use the existing pages as templates for structure
3. Open `src/App.tsx`
4. Add a new `<Route>` for your page in the `<Routes>` component
5. Save the files

### How to Use the Layout on a New Page
1. When adding a new page to `App.tsx`, wrap it with the `<Layout>` component:
   ```jsx
   <Route path="/about" element={<Layout><About /></Layout>} />
   ```
2. This automatically adds the Navbar and Footer to your page

### How to Customize the Layout
1. The `Layout` component accepts props to control visibility:
   ```jsx
   <Layout hideNavbar={true}> ... </Layout> // Hides the navbar
   <Layout hideFooter={true}> ... </Layout> // Hides the footer
   ```

Remember that any changes you make will be reflected across all pages that use the same components. This is especially true for the Navbar and Footer, which appear on every page.
