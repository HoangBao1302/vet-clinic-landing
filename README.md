# PawCare Veterinary Clinic Landing Page

A modern, professional landing page for a family veterinary clinic built with Next.js 15, Tailwind CSS, and TypeScript. Features appointment booking, service showcase, testimonials, and interactive contact section.

## 🌟 Features

- **Modern Design**: Professional blue and white color scheme with elegant typography
- **Responsive Layout**: Optimized for mobile, tablet, and desktop devices
- **Appointment Booking**: Integrated form with Resend email service
- **Service Showcase**: Detailed service listings with transparent pricing
- **Testimonials**: Customer reviews with carousel functionality
- **Interactive Map**: Embedded Google Maps for location
- **Sticky Call-to-Action**: Fixed bottom bar for easy contact
- **Smooth Navigation**: Scroll-to-section navigation with mobile menu
- **SEO Optimized**: Meta tags and structured data

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Email Service**: Resend
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## 📱 Sections

1. **Header**: Navigation, contact info, and social media links
2. **Hero**: Main headline with appointment booking form
3. **Services**: Service listings with pricing in Vietnamese Dong (₫)
4. **About**: Clinic information and team profiles
5. **Testimonials**: Customer reviews with star ratings
6. **Contact**: Interactive map and contact information
7. **Footer**: Additional links and information
8. **Sticky CTA**: Always-visible call button

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Resend account for email functionality

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HoangBao1302/vet-clinic-landing.git
   cd vet-clinic-landing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   - Create `.env.local` and add your Resend API key:
     ```
     RESEND_API_KEY=your_actual_api_key_here
     ```
   - Get your API key from [Resend Dashboard](https://resend.com/api-keys)

4. **Development Server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

### Resend Setup

1. **Create Account**: Sign up at [resend.com](https://resend.com)
2. **Get API Key**: Generate API key from dashboard
3. **Update Variables**: Add `RESEND_API_KEY` to `.env.local`

### Email Template

The appointment form sends professional HTML emails with:
- Client contact information
- Appointment request details
- Professional clinic branding
- Action reminders for staff

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect GitHub**: Push code to GitHub and connect to Vercel
2. **Environment Variables**: Add `RESEND_API_KEY` in Vercel dashboard
3. **Deploy**: Automatic deployment on git push

### Environment Variables

Required for production:
```
RESEND_API_KEY=your_actual_api_key_here
```

## 🌐 Business Information

- **Address**: 74 Lê Trọng Tấn, Tây Thạnh Ward, Ho Chi Minh City Việt Nam
- **Phone**: +84765452515
- **Email**: baotong130277@gmail.com

## 📊 Features Implementation Status

✅ **Completed Features:**
- [x] Professional design with blue/white theme
- [x] Responsive mobile-first layout
- [x] Appointment booking form with validation
- [x] Service showcase with pricing
- [x] About section with team profiles
- [x] Testimonials with carousel
- [x] Contact section with Google Maps
- [x] Sticky call-to-action bar
- [x] Smooth scroll navigation
- [x] Email integration with Resend
- [x] SEO optimization
- [x] Image optimization

## 🔧 Maintenance

### Regular Updates

- Update service pricing as needed
- Add new testimonials periodically
- Update team information and photos
- Monitor form submissions and email delivery

### Performance

- Images are automatically optimized by Next.js
- Tailwind CSS provides efficient styling
- Static generation for fast loading

## 📞 Support

For technical support or customization requests, please refer to:
- Next.js documentation: [nextjs.org](https://nextjs.org)
- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com)
- Resend API: [resend.com/docs](https://resend.com/docs)

---

**Built with ❤️ for PawCare Clinic**