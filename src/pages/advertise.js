import React from 'react'
import { Link } from 'gatsby'
import {
  Users,
  TrendingUp,
  Target,
  Share2,
  Zap,
  ArrowRight,
  Mail,
  CheckCircle2,
  Layers,
  Megaphone,
  Eye,
  Award,
  Briefcase,
  CalendarOff,
  FileX,
  DollarSign,
  Sparkles,
  CreditCard,
  Handshake,
} from 'lucide-react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import HeroHeader from '../components/HeroHeader'
import { LinkedInIcon, FacebookIcon, PinterestIcon } from '../components/SocialIcons'
import heroAdvertise from '../assets/images/hero_advertise.svg'
import logoWhite from '../assets/images/logo-white.svg'
import cloudOne from '../assets/images/cloud_one.svg'
import cloudThree from '../assets/images/cloud_three.svg'
import cloudFloor from '../assets/images/cloud_floor.svg'

const AdvertisePage = () => {
  return (
    <Layout>
      {/* Main Hero Section */}
      <HeroHeader type="emphasis">
        <div className="w-full pt-[60px] md:pt-[80px] pb-[40px] lg:pb-[60px] flex flex-col items-center text-center">
          <h1 className="flex flex-col items-center gap-3 text-white mb-4">
            <span>Partner with</span>
            <img src={logoWhite} alt="PharmTechsOnly!" className="max-w-full h-auto" />
          </h1>
          <p className="text-white/90 max-w-2xl mb-8">
            Connect with 55,000+ engaged pharmacy technicians across LinkedIn, Facebook, Instagram, and Pinterest
          </p>
          <div className="flex justify-center px-6 mb-8">
            <img src={heroAdvertise} alt="Marketing Opportunities" className="max-w-full h-auto" />
          </div>

          {/* Hero Stat Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mb-5">
            <div className="hero-stat-card">
              <div className="hero-stat-value">
                <Users className="w-6 h-6 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span>55K+</span>
              </div>
              <span className="hero-stat-label">Total Followers</span>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-value">
                <TrendingUp className="w-6 h-6 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span>High</span>
              </div>
              <span className="hero-stat-label">Engagement Rate</span>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-value">
                <Target className="w-6 h-6 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span>100%</span>
              </div>
              <span className="hero-stat-label">Targeted Reach</span>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-value">
                <Share2 className="w-6 h-6 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span>6</span>
              </div>
              <span className="hero-stat-label">Platforms</span>
            </div>
          </div>

          {/* Hero CTA Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-5xl">
            <a href="#services" className="btn-hero-primary">
              <Zap className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
            </a>

            <Link to="/contact/" className="btn-hero-secondary">
              <Mail className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </HeroHeader>

      {/* Main Content Sections */}
      <section className="relative pt-10 pb-[80px] lg:pb-[140px]">
        <div className="content-container relative">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-14">

            {/* Why Partner With Us? */}
            <div className="section-card md:p-10 text-center overflow-hidden">
              <div className="flex justify-center mb-4">
                <div className="icon-badge-primary">
                  <Zap className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </div>
              </div>
              <h2 className="text-[28px] md:text-[32px] mb-4">Why Partner With Us?</h2>
              <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-6">
                Reach pharmacy technicians at every stage of their careers, from people deciding how to get started to experienced techs looking for what's next.
              </p>
              <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-6">
                Pharm Techs Only! puts your message in front of an audience that comes to us for training, continuing education, career opportunities, and resources for their work.
              </p>

              <div className="callout-banner max-w-3xl mx-auto mb-8">
                <CheckCircle2 className="w-5 h-5 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                <span>
                  <strong className="text-pharm-purple">Perfect for:</strong> brands enrolling students, launching a product, promoting an event, or building awareness.
                </span>
              </div>

              <h3 className="text-[20px] md:text-[22px] font-bold text-pharm-purple mb-5">Our Audience</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="stat-tile stat-tile-blue">
                  <div className="stat-tile-icon text-[#0A66C2]">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold text-[#0A66C2] leading-tight">30K+</span>
                  <span className="text-xs font-medium text-pharm-grey mt-1">Company Page Followers</span>
                </div>

                <div className="stat-tile stat-tile-indigo">
                  <div className="stat-tile-icon text-[#0A66C2]">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold text-pharm-purple leading-tight">21K+</span>
                  <span className="text-xs font-medium text-pharm-grey mt-1">Founder&apos;s Page Followers</span>
                </div>

                <div className="stat-tile stat-tile-purple">
                  <div className="stat-tile-icon text-[#0A66C2]">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold text-pharm-purple leading-tight">14K+</span>
                  <span className="text-xs font-medium text-pharm-grey mt-1">Newsletter Subscribers</span>
                </div>

                <div className="stat-tile stat-tile-blue">
                  <div className="stat-tile-icon text-[#1877F2]">
                    <FacebookIcon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold text-[#1877F2] leading-tight">7.5K+</span>
                  <span className="text-xs font-medium text-pharm-grey mt-1">Community Members</span>
                </div>

                <div className="stat-tile stat-tile-red">
                  <div className="stat-tile-icon text-[#E60023]">
                    <PinterestIcon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold text-[#E60023] leading-tight">22K+</span>
                  <span className="text-xs font-medium text-pharm-grey mt-1">Monthly Views</span>
                </div>
              </div>
            </div>

            {/* Marketing Offerings / Available Campaigns */}
            <div id="services" className="scroll-mt-8">
              <div className="text-center mb-10">
                <div className="mb-4">
                  <span className="section-pill">
                    <Layers className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                    <span>Available Campaigns</span>
                  </span>
                </div>
                <h2 className="text-[28px] md:text-[34px] mb-3">Marketing Offerings</h2>
                <p className="text-sm md:text-base leading-relaxed text-pharm-grey max-w-2xl mx-auto mb-0">
                  Get the word out ahead of a launch, event, or enrollment deadline, or stay visible with monthly promotion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* 30-Day Spotlight */}
                <div className="section-card flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="icon-badge-soft bg-blue-50 text-pharm-light-blue">
                        <Zap className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-pharm-purple leading-snug mb-0">
                        30-Day Spotlight
                      </h3>
                    </div>

                    <div className="campaign-price-box">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-bold text-pharm-purple">$1,250</span>
                        <span className="text-sm font-medium text-gray-500">total</span>
                      </div>
                      <span className="text-xs font-medium text-gray-500 mt-0.5">One-time 30-day campaign</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-pharm-purple mb-3">
                      <span>Over 30 days:</span>
                    </div>

                    <ul className="checklist mb-6">
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>8 social media placements</span>
                      </li>
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>2 featured emails</span>
                      </li>
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>2 LinkedIn newsletter placements</span>
                      </li>
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>2 Pinterest placements</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="mailto:questions@pharmtechsonly.com?subject=30-Day%20Spotlight%20Campaign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta-green"
                  >
                    <span>Get Started with 30-Day Spotlight</span>
                    <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>

                {/* 90-Day Growth Campaign */}
                <div className="section-card flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="icon-badge-soft bg-green-50 text-[#5FB54A]">
                        <TrendingUp className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-pharm-purple leading-snug mb-0">
                        90-Day Growth Campaign
                      </h3>
                    </div>

                    <div className="campaign-price-box">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-pharm-purple">$1,000</span>
                        <span className="text-sm font-medium text-gray-500">/month</span>
                      </div>
                      <span className="text-xs font-medium text-gray-500 mt-0.5">$3,000 total</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-pharm-purple mb-3">
                      <span>Each month:</span>
                    </div>

                    <ul className="checklist mb-6">
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>4 social media placements</span>
                      </li>
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>1 featured email</span>
                      </li>
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>1 LinkedIn newsletter placement</span>
                      </li>
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>1 Pinterest placement</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="mailto:questions@pharmtechsonly.com?subject=90-Day%20Growth%20Campaign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta-green"
                  >
                    <span>Get Started with 90-Day Growth</span>
                    <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>

                {/* 6-Month Visibility Campaign */}
                <div className="section-card flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="icon-badge-soft bg-indigo-50 text-pharm-purple">
                        <Eye className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-pharm-purple leading-snug mb-0">
                        6-Month Visibility Campaign
                      </h3>
                    </div>

                    <div className="campaign-price-box">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-pharm-purple">$900</span>
                        <span className="text-sm font-medium text-gray-500">/month</span>
                      </div>
                      <span className="text-xs font-medium text-gray-500 mt-0.5">$5,400 total</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-pharm-purple mb-3">
                      <span>Each month:</span>
                    </div>

                    <ul className="checklist mb-6">
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>4 social media placements</span>
                      </li>
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>1 featured email</span>
                      </li>
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>1 LinkedIn newsletter placement</span>
                      </li>
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>1 Pinterest placement</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="mailto:questions@pharmtechsonly.com?subject=6-Month%20Visibility%20Campaign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta-green"
                  >
                    <span>Get Started with 6-Month Visibility</span>
                    <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>

                {/* 12-Month Brand Presence */}
                <div className="section-card flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="icon-badge-soft bg-amber-50 text-amber-600">
                        <Award className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-pharm-purple leading-snug mb-0">
                        12-Month Brand Presence
                      </h3>
                    </div>

                    <div className="campaign-price-box">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-pharm-purple">$800</span>
                        <span className="text-sm font-medium text-gray-500">/month</span>
                      </div>
                      <span className="text-xs font-medium text-gray-500 mt-0.5">$9,600 total</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-pharm-purple mb-3">
                      <span>Each month:</span>
                    </div>

                    <ul className="checklist mb-6">
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>4 social media placements</span>
                      </li>
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>1 featured email</span>
                      </li>
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>1 LinkedIn newsletter placement</span>
                      </li>
                      <li className="checklist-item">
                        <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>1 Pinterest placement</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="mailto:questions@pharmtechsonly.com?subject=12-Month%20Brand%20Presence%20Campaign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta-green"
                  >
                    <span>Get Started with 12-Month Presence</span>
                    <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* How Placements Work */}
            <div className="section-card md:p-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="icon-badge-primary w-12 h-12">
                  <Share2 className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h2 className="text-[22px] md:text-[26px] mb-0">How Placements Work</h2>
              </div>

              <p className="text-sm md:text-base leading-relaxed mb-5">
                Social placements run across the Pharm Techs Only! LinkedIn page, our founder&rsquo;s LinkedIn
                profile, and Facebook. Each featured email focuses on your organization or offering. All campaigns
                include performance reporting and visibility on Pharm Techs Only! and TechConnect&reg; where
                appropriate.
              </p>

              <div className="callout-banner mb-6">
                <CheckCircle2 className="w-5 h-5 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                <span>
                  You provide finished copy, graphics, and links. We handle scheduling and distribution. You can
                  update your messaging and creative throughout the campaign.
                </span>
              </div>

              <div className="sub-panel flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="icon-badge-soft bg-blue-50 text-pharm-light-blue">
                    <Mail className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <span className="text-base font-bold text-pharm-purple">Tell us about your campaign</span>
                </div>
                <a
                  href="mailto:questions@pharmtechsonly.com?subject=Campaign%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-green sm:!w-auto px-6"
                >
                  <span>questions@pharmtechsonly.com</span>
                  <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Pharmacy Technician Job Boost */}
            <div className="section-card md:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-4">
                  <div className="icon-badge-primary w-12 h-12">
                    <Briefcase className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-[22px] md:text-[26px] mb-1">Pharmacy Technician Job Boost</h2>
                    <p className="text-xs md:text-sm text-gray-500 leading-normal mb-0">
                      One-time promotion &bull; No contracts &bull; Fast results
                    </p>
                  </div>
                </div>
                <span className="price-pill self-start sm:self-center">$99</span>
              </div>

              <p className="text-sm md:text-base leading-relaxed mb-6">
                Get a 30-day job listing on the Pharm Techs Only! Career Portal in TechConnect®, plus two promotional posts shared on LinkedIn and Facebook over 7-10 days. Each purchase covers one pharmacy technician opening.
              </p>

              {/* Job Boost Includes */}
              <div className="sub-panel mb-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-pharm-purple mb-3">
                  <CheckCircle2 className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                  <span>Job Boost includes:</span>
                </div>
                <ul className="checklist">
                  <li className="checklist-item">
                    <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                    <span><strong>1 pharmacy technician job</strong> per purchase</span>
                  </li>
                  <li className="checklist-item">
                    <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                    <span><strong>2 social media posts</strong> over a short 7-10 day promotion window</span>
                  </li>
                  <li className="checklist-item">
                    <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                    <span>Shared across <strong>Pharm Techs Only!&apos;s social platforms</strong></span>
                  </li>
                  <li className="checklist-item">
                    <CheckCircle2 className="w-4 h-4 text-[#5FB54A] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                    <span><strong>Targeted visibility</strong> to pharmacy technicians actively watching for new roles</span>
                  </li>
                </ul>
              </div>

              {/* 4 Mini Feature Tiles */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                <div className="mini-feature-tile">
                  <CalendarOff className="w-5 h-5 text-pharm-purple" strokeWidth={1.75} aria-hidden="true" />
                  <span>No subscriptions</span>
                </div>
                <div className="mini-feature-tile">
                  <FileX className="w-5 h-5 text-pharm-purple" strokeWidth={1.75} aria-hidden="true" />
                  <span>No contracts</span>
                </div>
                <div className="mini-feature-tile">
                  <DollarSign className="w-5 h-5 text-pharm-purple" strokeWidth={1.75} aria-hidden="true" />
                  <span>No recruiter fees</span>
                </div>
                <div className="mini-feature-tile">
                  <Target className="w-5 h-5 text-pharm-purple" strokeWidth={1.75} aria-hidden="true" />
                  <span>PharmTech-focused</span>
                </div>
              </div>

              {/* How It Works */}
              <div className="sub-panel mb-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-pharm-purple mb-4">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" strokeWidth={2} aria-hidden="true" />
                  <span>How it works</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-pharm-grey">
                    <div className="icon-badge-soft w-8 h-8 bg-blue-50 text-pharm-light-blue">
                      <CreditCard className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <span><strong>Purchase your Job Boost.</strong> After checkout, you'll receive a link to submit your job details.</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-pharm-grey">
                    <div className="icon-badge-soft w-8 h-8 bg-blue-50 text-pharm-light-blue">
                      <Mail className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <span><strong>Submit your opening.</strong> Pharm Techs Only! will publish your listing on the Career Portal for 30 days.</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-pharm-grey">
                    <div className="icon-badge-soft w-8 h-8 bg-blue-50 text-pharm-light-blue">
                      <Megaphone className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <span><strong>We handle the promotion.</strong>  We'll share two posts on LinkedIn and Facebook during the 7-10 day promotion window.</span>
                  </div>
                </div>
              </div>

              <a
                href="https://buy.stripe.com/5kQdR97lH3ie7nE06d2oE04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-green py-3.5 text-base"
              >
                <Sparkles className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                <span>Purchase Job Boost - $99</span>
                <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
              </a>
            </div>

            {/* Final Partner CTA Banner */}
            <div className="cta-banner-emphasis md:px-10 md:py-12">
              <div className="w-28 h-28 rounded-full bg-white/10 absolute -top-12 -left-12 pointer-events-none" aria-hidden="true" />
              <div className="w-36 h-36 rounded-full bg-white/10 absolute -bottom-16 -right-14 pointer-events-none" aria-hidden="true" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <Handshake className="w-6 h-6 text-white" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h2 className="text-[24px] md:text-[30px] text-white mb-0">
                    Partner with Pharm Techs Only!
                  </h2>
                </div>

                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-7">
                  Promote your business, brand, or open roles directly to a global pharmacy technician audience.
                </p>

                <div className="cta-banner-glass-box mb-7">
                  <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/90 mb-2">
                    <Mail className="w-4 h-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                    <span>For questions, custom requests, or additional details:</span>
                  </div>
                  <a
                    href="mailto:questions@pharmtechsonly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-base md:text-lg font-bold text-white hover:underline"
                  >
                    <span>questions@pharmtechsonly.com</span>
                    <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>

                <div className="flex justify-center">
                  <Link to="/contact/" className="btn-hero-primary !w-auto px-7 py-3">
                    <Zap className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                    <span>Get Started Today</span>
                    <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="-left-[115px] bottom-[420px] absolute z-10"><img src={cloudOne} alt="Cloud One" /></div>
          <div className="-right-[180px] bottom-[225px] absolute z-10"><img src={cloudThree} alt="Cloud Three" /></div>
        </div>
        <div className="w-full left-[0] bottom-[0] absolute z-10"><img src={cloudFloor} alt="Cloud Floor" className="w-full" /></div>
      </section>
    </Layout>
  )
}

export default AdvertisePage

const PAGE_TITLE = 'Put Your Program, Product, or Brand in Front of Pharmacy Technicians'
const PAGE_DESC = 'Reach pharmacy technicians at every stage of their careers, from people deciding how to get started to experienced techs looking for what\'s next.Whether you\'re enrolling students, launching a product, promoting an event, or building awareness for your organization, Pharm Techs Only! puts your message in front of an audience that comes to us for training, continuing education, career opportunities, and resources for their work.'

export const Head = () => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pharmacy Technician Marketing & Advertising',
    provider: {
      '@type': 'Organization',
      name: 'Pharm Techs Only!',
      url: 'https://www.pharmtechsonly.com',
    },
    description: 'Targeted marketing and advertising services to connect healthcare employers and organizations with pharmacy technicians through Pharm Techs Only! networks.',
    areaServed: 'Worldwide',
    serviceType: 'Advertising and Marketing',
    offers: [
      {
        '@type': 'Offer',
        name: '30-Day Spotlight',
        price: '1250',
        priceCurrency: 'USD',
        description: 'Over 30 days: 8 social media placements, 2 featured emails, 2 LinkedIn newsletter placements, 2 Pinterest placements.',
      },
      {
        '@type': 'Offer',
        name: '90-Day Growth Campaign',
        price: '3000',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '1000',
          priceCurrency: 'USD',
          unitCode: 'MON',
          unitText: 'month',
          billingDuration: {
            '@type': 'QuantitativeValue',
            value: 3,
            unitCode: 'MON',
          },
        },
        description: '$1,000/month ($3,000 total). Each month: 4 social media placements, 1 featured email, 1 LinkedIn newsletter placement, 1 Pinterest placement.',
      },
      {
        '@type': 'Offer',
        name: '6-Month Visibility Campaign',
        price: '5400',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '900',
          priceCurrency: 'USD',
          unitCode: 'MON',
          unitText: 'month',
          billingDuration: {
            '@type': 'QuantitativeValue',
            value: 6,
            unitCode: 'MON',
          },
        },
        description: '$900/month ($5,400 total). Each month: 4 social media placements, 1 featured email, 1 LinkedIn newsletter placement, 1 Pinterest placement.',
      },
      {
        '@type': 'Offer',
        name: '12-Month Brand Presence',
        price: '9600',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '800',
          priceCurrency: 'USD',
          unitCode: 'MON',
          unitText: 'month',
          billingDuration: {
            '@type': 'QuantitativeValue',
            value: 12,
            unitCode: 'MON',
          },
        },
        description: '$800/month ($9,600 total). Each month: 4 social media placements, 1 featured email, 1 LinkedIn newsletter placement, 1 Pinterest placement.',
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pharmtechsonly.com' },
      { '@type': 'ListItem', position: 2, name: 'Marketing Opportunities', item: 'https://www.pharmtechsonly.com/advertise' },
    ],
  }

  return (
    <>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESC} />
      <SEO title={PAGE_TITLE} description={PAGE_DESC} path="/advertise/" />
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </>
  )
}
