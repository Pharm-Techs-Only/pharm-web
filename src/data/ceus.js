// CEU data as a flat array for easier management
export const ceuData = [
  // 2025 CEUs
  {
    title: 'Enhancing Pharmacy Roles in Hormonal Contraception Care',
    hours: '1.0 Contact Hour',
    description: 'Understand the enhanced roles pharmacy professionals play in hormonal contraception care and counseling.',
    expirationDate: '2025-09-15',
    status: 'Available',
    link: 'https://www.pharmacytimes.org/courses/enhancing-pharmacy-roles-in-hormonal-contraception-care-pharmacy-technician-credit'
  },
  {
    title: 'Ensuring Pharmacy Technicians\' Proficiency in Risk Evaluation and Mitigation Strategies',
    hours: '1.0 Contact Hour',
    description: 'Develop proficiency in Risk Evaluation and Mitigation Strategies (REMS) for pharmacy technicians.',
    expirationDate: '2025-09-16',
    status: 'Available',
    link: 'https://www.pharmacytimes.org/courses/ensuring-pharmacy-technicians-proficiency-in-risk-evaluation-and-mitigation-strategies'
  },
  {
    title: 'Continuing the Conversation: OTC Contraception in Pharmacy Practice',
    hours: '1.0 Contact Hours',
    description: 'Explore the role of over-the-counter contraception in modern pharmacy practice.',
    expirationDate: '2025-09-19',
    status: 'Available',
    link: 'https://www.pharmacytimes.org/courses/continuing-the-conversation-otc-contraception-in-pharmacy-practice-pharmacy-technician?sessionFields=%5B%5B%22profession%22%2C%22Pharmacy%20Technician%22%5D%5D'
  },
  {
    title: 'The Mediterranean Diet\'s Effect on Health',
    hours: '1.5 Contact Hours',
    description: 'Learn about the health benefits of the Mediterranean diet and its impact on patient outcomes.',
    expirationDate: '2025-10-17',
    status: 'Available',
    link: 'https://pharmacy.uconn.edu/course/meddiet/'
  },
  {
    title: 'Innovations in Diabetes Technology: A New Era of Patient Choice and Opportunities for Pharmacists to Support Insulin Pump Management',
    hours: '1.0 Contact Hour',
    description: 'Discover the latest innovations in diabetes technology and how pharmacists can support insulin pump management.',
    expirationDate: '2025-10-30',
    status: 'Available',
    link: 'https://www.pharmacytimes.org/courses/innovations-in-diabetes-technology-a-new-era-of-patient-choice-and-opportunities-for-pharmacists-to-support-insulin-pump-management-pharmacy-technician-credit-pharmacy-technician'
  },
  {
    title: 'Formalized Training Cascades for Pharmacy Teams: Becoming an LGBTQ+ Ally to Improve HPV Immunization',
    hours: '1.5 Contact Hours',
    description: 'Learn to become an LGBTQ+ ally and improve HPV immunization rates through formalized training cascades.',
    expirationDate: '2025-11-27',
    status: 'Available',
    link: 'https://www.powerpak.com/course/preamble/125560'
  },
  {
    title: 'Only Skin Deep: The Pharmacist\'s Guide to Intradermal Vaccine Administration',
    hours: '0.5 Contact Hours',
    description: 'Master the techniques and considerations for intradermal vaccine administration.',
    expirationDate: '2025-12-05',
    status: 'Available',
    link: 'https://pharmacy.uconn.edu/course/itradermalvaccineadmin/'
  },
  // 2026 CEUs
  {
    title: 'New and Approved: FDA\'s 2024 Drug Lineup',
    hours: '1.5 Contact Hours',
    description: 'Stay updated with the latest FDA-approved drugs from 2024 and their clinical applications.',
    expirationDate: '2026-01-06',
    status: 'Available',
    link: '#'
  },
  {
    title: 'From A to Z of RFID Technology: Unique Uses and the Future of RFID',
    hours: '1.5 Contact Hours',
    description: 'Explore comprehensive applications of RFID technology in pharmacy and healthcare settings.',
    expirationDate: '2026-02-13',
    status: 'Available',
    link: '#'
  },
  {
    title: 'HIV Pre- and Post-Exposure Prophylaxis in Adolescents and Young Adults',
    hours: '1.5 Contact Hours',
    description: 'Learn about HIV prevention strategies and prophylaxis protocols for younger populations.',
    expirationDate: '2026-02-15',
    status: 'Available',
    link: '#'
  },
  {
    title: 'USP <797> and Parenteral Nutrition: What\'s New on the Menu',
    hours: '0.5 Contact Hours',
    description: 'Updates on USP <797> requirements specifically related to parenteral nutrition compounding.',
    expirationDate: '2026-03-15',
    status: 'Available',
    link: '#'
  },
  {
    title: 'Pet Allergies',
    hours: '2 Contact Hours',
    description: 'Comprehensive overview of pet allergies, their management, and treatment options.',
    expirationDate: '2026-03-15',
    status: 'Available',
    link: '#'
  },
  {
    title: 'Compounding From BDS: Understanding FDA\'s Final Guidance',
    hours: '1 Contact Hour',
    description: 'Understand FDA\'s final guidance on compounding from bulk drug substances.',
    expirationDate: '2026-03-28',
    status: 'Available',
    link: '#'
  },
  {
    title: '2022 ASHP National Survey: Report on the Current State of Pharmacy Practice',
    hours: '1.0 Contact Hours',
    description: 'Review findings from the ASHP national survey on current pharmacy practice trends.',
    expirationDate: '2026-05-19',
    status: 'Available',
    link: '#'
  },
  {
    title: 'Achieving Your Personnel Best: Training Personnel in USP Chapter <797> and Opportunities for Quality Assessment Plans',
    hours: '1.5 Contact Hours',
    description: 'Comprehensive training guide for USP Chapter <797> personnel requirements and quality assessment.',
    expirationDate: '2026-05-27',
    status: 'Available',
    link: '#'
  },
  {
    title: 'Navigating the Life Cycle of Viable Air and Surface Samples',
    hours: '0.5 Contact Hour',
    description: 'Learn proper procedures for handling and analyzing viable air and surface samples.',
    expirationDate: '2026-05-27',
    status: 'Available',
    link: '#'
  },
  {
    title: 'IV Been There Too: Safely and Effectively Incorporating Technology and a Designated Person in USP <797> Compliance',
    hours: '1 Contact Hour',
    description: 'Explore safe integration of technology and personnel roles in USP <797> compliance.',
    expirationDate: '2026-05-27',
    status: 'Available',
    link: '#'
  },
  // 2027 CEUs
  {
    title: 'How to Work with (Just About) Anyone: Ways to Build Connections for an Inclusive Work Culture',
    hours: '1.25 Contact Hours',
    description: 'Learn effective strategies for building connections and fostering an inclusive work environment.',
    expirationDate: '2027-06-12',
    status: 'Available',
    link: '#'
  }
]

// Utility functions for working with CEU data

/**
 * Groups CEUs by expiration year
 * @param {Array} ceus - Array of CEU objects
 * @returns {Object} Object with years as keys and arrays of CEUs as values
 */
export const groupCEUsByYear = (ceus = ceuData) => {
  return ceus.reduce((grouped, ceu) => {
    const year = new Date(ceu.expirationDate).getFullYear()
    if (!grouped[year]) {
      grouped[year] = []
    }
    grouped[year].push(ceu)
    return grouped
  }, {})
}

/**
 * Sorts CEUs by expiration date (earliest first)
 * @param {Array} ceus - Array of CEU objects
 * @returns {Array} Sorted array of CEUs
 */
export const sortCEUsByDate = (ceus = ceuData) => {
  return [...ceus].sort((a, b) => new Date(a.expirationDate) - new Date(b.expirationDate))
}

/**
 * Gets CEUs grouped by year and sorted within each year (excludes expired CEUs)
 * @param {Array} ceus - Array of CEU objects
 * @returns {Object} Object with years as keys and sorted arrays of CEUs as values
 */
export const getCEUsGroupedAndSorted = (ceus = ceuData) => {
  // Filter out expired CEUs first
  const currentCeus = filterCEUsByExpiration(ceus)
  const sortedCeus = sortCEUsByDate(currentCeus)
  const groupedCeus = groupCEUsByYear(sortedCeus)
  
  // Sort CEUs within each year group by date
  Object.keys(groupedCeus).forEach(year => {
    groupedCeus[year] = sortCEUsByDate(groupedCeus[year])
  })
  
  return groupedCeus
}

/**
 * Gets available years sorted in ascending order (only years with non-expired CEUs)
 * @param {Array} ceus - Array of CEU objects
 * @returns {Array} Array of years as strings, sorted ascending
 */
export const getAvailableYears = (ceus = ceuData) => {
  // Filter out expired CEUs first, then get years
  const currentCeus = filterCEUsByExpiration(ceus)
  const years = [...new Set(currentCeus.map(ceu => new Date(ceu.expirationDate).getFullYear().toString()))]
  return years.sort((a, b) => parseInt(a) - parseInt(b))
}

/**
 * Filters CEUs by status
 * @param {Array} ceus - Array of CEU objects
 * @param {string} status - Status to filter by ('Available', 'Coming Soon', etc.)
 * @returns {Array} Filtered array of CEUs
 */
export const filterCEUsByStatus = (ceus = ceuData, status = 'Available') => {
  return ceus.filter(ceu => ceu.status === status)
}

/**
 * Filters out expired CEUs (keeps only current and future CEUs)
 * @param {Array} ceus - Array of CEU objects
 * @returns {Array} Filtered array of non-expired CEUs
 */
export const filterCEUsByExpiration = (ceus = ceuData) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Set to start of day for accurate comparison
  
  return ceus.filter(ceu => {
    const expirationDate = new Date(ceu.expirationDate)
    return expirationDate >= today
  })
}

/**
 * Checks if a CEU is expiring soon (within specified days)
 * @param {Object} ceu - CEU object
 * @param {number} days - Number of days to consider as "soon" (default: 30)
 * @returns {boolean} True if expiring soon
 */
export const isCEUExpiringSoon = (ceu, days = 30) => {
  const today = new Date()
  const expiration = new Date(ceu.expirationDate)
  const timeDiff = expiration.getTime() - today.getTime()
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
  return daysDiff <= days && daysDiff > 0
}
