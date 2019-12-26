import logo from '../images/logo_bethel.png'; // add school logo to images folder and import here

export const applicationsLive = true; // set to false if not currently accepting applications
export const disabledLoanAppFormID = '69140c47-bb03-4a1b-b674-cc136fdea23d'; // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = 'October 29, 2019';

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
	// term details section
	interestRate36: '8.99%',
	interestRate60: '10.99%',
	APRRange36: '10.82 - 11.69%',
	APRRange60: '12.36 - 12.71%',
	interestOnly: [
		{
			// for multiple examples of interest only, add items to interestOnly array
			programName: 'Full-Stack Web Development Online',
			APR36: '10.82%',
			financeCharge36: '$2,683.21',
			IOPayment36: '$77.91',
			FullMonthlyPayment36: '$330.67',
			APR60: '12.36%',
			financeCharge60: '$4,516.63',
			IOPayment60: '$95.25',
			FullMonthlyPayment60: '$226.07',
			LoanExampleAmt: '$10,000',
			LoanExampleOFeeAmt: '$400',
			LoanExampleAmtPlusOFee: '$10,400',
			programLength: '8' // program length in months
		},
		{
			// for multiple examples of interest only, add items to interestOnly array
			programName: 'Data Science Online',
			APR36: '10.94%',
			financeCharge36: '$2,527.38',
			IOPayment36: '$77.91',
			FullMonthlyPayment36: '$330.67',
			APR60: '12.41%',
			financeCharge60: '$4,326.13',
			IOPayment60: '$95.25',
			FullMonthlyPayment60: '$226.07',
			LoanExampleAmt: '$10,000',
			LoanExampleOFeeAmt: '$400',
			LoanExampleAmtPlusOFee: '$10,400',
			programLength: '6' // program length in months
		}
	],
	immediateRepayment: [
		{
			// for multiple examples of immmediate repayment, add items to immediateRepayment array
			programName: 'Full-Stack Web Development Online and Data Science Online',
			APR36: '11.69%',
			financeCharge36: '$1,904.08',
			FullMonthlyPayment36: '$330.67',
			APR60: '12.71%',
			financeCharge60: '$3,564.16',
			FullMonthlyPayment60: '$226.07',
			LoanExampleAmt: '$10,000',
			LoanExampleOFeeAmt: '$400',
			LoanExampleAmtPlusOFee: '$10,400'
		}
	]
};

export const faq = {
	// faq section
	costOfLiving: false, // true if at least one program has cost of living included
	costOfLivingPrograms: '', // leave as empty string is cost of living availability is the same across all programs
	multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
	interestOnly: true, // true if interest-only payments are an option
	immediateRepayment: true, // true if immediate repayment is an option
	multipleLoanLengths: true, // true if 36 and 60 month options are both available
	multipleLoanTypes: true, // true if both IR and IO are available
	multiPrograms: true, // only true if there are multiple programs
	onlinePrograms: true, // true if at least one program is remote/online
	schoolHQState: 'CA',
	origFee: 0.04,

	// interest payment FAQ info
	exampleLoanAmount: '$10,000',
	interestRate36: '8.99%',
	interestRate60: '10.99%',
	APR36: '10.82 - 10.94%',
	APR60: '12.36 - 12.41%',
	IOPayment36: '$77.91',
	IOPayment60: '$95.25',

	// max loan amounts by program for faq1
	loanRange: [
		{
			programName: 'Full-Stack Web Development Online and Data Science Online',
			maxAmount: '$15,900',
			col: false,
			colAmount: '$6,000'
		}
	]
};

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo; // go to header.js if height needs adjustment

export const schoolName = 'Bethel Tech';

export const schoolURL = 'https://betheltech.net/'; // update with url of school's website

export const skfURL = 'https://betheltech.skills.fund/'; // update with Skills Fund url

export const headline = 'Learn to Code at Bethel Tech'; // update headline as appropriate

export const leadContent = {
	header: 'Your last step on the path toward changing your career',
	paragraph: `${schoolName} offers programs in Full-Stack Web Development and Data Science to provide students with a foundation for a career in tech. ${schoolName} partners with Skills Fund to offer tuition${faq.costOfLiving
		? ' and cost of living'
		: ''} financing so more students like you can access their program.`
};

export const threeStepCardText = {
	step1: '',
	step2: {
		header: 'select your program',
		text: 'Choose between the Full-Stack Web Development Online and Data Science Online programs.'
	},
	step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`
};

export const netlifyFormName = 'betheltech_contact';

export const GATracking = 'UA-68312423-1';

export const hubspotFormId = 'efbe2c5e-9f36-46b8-89a1-7bfdce550115'; // create Hubspot form, get form id after publishing

export const selectAProgram = 'select_a_betheltech_program'; // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000;
export const placeholder = '$10,000';
export const interestRates = {
	ir36: 8.99,
	ir60: 10.99
};
export const moreThanSixPrograms = false; // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
	// update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
	{
		name: 'Full-Stack Web Development Online',
		url: 'https://my.skills.fund/application?lenderCode=SKBTWDO18',
		loanInfo: {
			// match loanInfo in first metro below
			maxLoanAmt: 15900,
			loanTerm36: true,
			loanTerm60: true,
			'0': {
				// interest-only
				k: 10,
				apr36: 10.82,
				apr60: 12.35
			},
			'1': {
				apr36: 11.69,
				apr60: 12.71
			}
		},
		defaultLoanType: '0', // leave at 0 for interest-only, set to 1 for immediate repayment
		showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
		showLoanTypes: true, // true if both IR and IO are available
		locations: [ 'Metro 1', 'Metro 2', 'Metro 3' ],
		metros: [
			// list in same order as locations array above
			{
				location: 'Metro 1',
				loanInfo: {
					// // match loanInfo to Program 1 above
					maxLoanAmt: 15900,
					loanTerm36: true,
					loanTerm60: true,
					'0': {
						k: 10,
						apr36: 11.16,
						apr60: 12.51
					},
					'1': {
						apr36: 11.69,
						apr60: 12.71
					}
				}
			},
			{
				location: 'Metro 2',
				loanInfo: {
					maxLoanAmt: 15545,
					loanTerm36: true,
					loanTerm60: true,
					'0': {
						k: 5,
						apr36: 11.16,
						apr60: 12.51
					},
					'1': null
				}
			},
			{
				location: 'Metro 3',
				loanInfo: {
					maxLoanAmt: 20545,
					loanTerm36: true,
					loanTerm60: true,
					'0': {
						k: 5,
						apr36: 11.16,
						apr60: 12.51
					},
					'1': null
				}
			}
		]
	},
	{
		name: 'Data Science Online',
		url: 'https://my.skills.fund/application?lenderCode=SKBTDSO18',
		loanInfo: {
			// match loanInfo in first metro below
			maxLoanAmt: 15900,
			loanTerm36: true,
			loanTerm60: true,
			'0': {
				k: 8,
				apr36: 10.94,
				apr60: 12.41
			},
			'1': {
				apr36: 11.69,
				apr60: 12.71
			}
		},
		defaultLoanType: '0', // leave at 0 for interest-only, set to 1 for immediate repayment
		showMetros: false,
		showLoanTypes: true,
		locations: [ 'Metro 1', 'Metro 2' ],
		metros: [
			{
				location: 'Metro 1',
				loanInfo: {
					// match loanInfo to Program 2 loanInfo above
					maxLoanAmt: 15900,
					loanTerm36: true,
					loanTerm60: true,
					'0': {
						k: 8,
						apr36: 10.94,
						apr60: 12.41
					},
					'1': {
						apr36: 11.69,
						apr60: 12.71
					}
				}
			},
			{
				location: 'Metro 2',
				loanInfo: {
					maxLoanAmt: 15545,
					loanTerm36: true,
					loanTerm60: true,
					'0': {
						k: 5,
						apr36: 11.16,
						apr60: 12.51
					},
					'1': null
				}
			}
		]
	}
];

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
	'Choose the loan amount that works best for you. Borrow up to $15,900 for Full-Stack Web Development or Data Science tuition.';

export const paymentTable = {
	headers: [ 'Program', 'Tuition', 'Cost of Living', 'Max Total' ],
	data: [
		{
			name: 'PROGRAM 1',
			tuition: '$13,495',
			col: '$6,000',
			max: '$19,495'
		},
		{
			name: 'PROGRAM 2',
			tuition: '$16,495',
			col: '$6,000',
			max: '$22,495'
		},
		{
			name: 'PROGRAM 3',
			tuition: '$13,495',
			col: '--',
			max: '$13,495'
		}
	],
	show: false
};

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>
