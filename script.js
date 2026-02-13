// Data model: sample hospitals in Kerala with specializations and doctors
const hospitals = [
	{
		id: 'h-tvpm',
		name: 'Thiruvananthapuram General Hospital',
		city: 'Thiruvananthapuram',
		specializations: [
			{
				id: 's-cardio',
				name: 'Cardiology',
				doctors: [
					{ id: 'd1', name: 'Dr. Asha Nair', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd2', name: 'Dr. Ramesh Kumar', waitingTime: 40, tokensGone: 30, crowdLevel: 'Very Busy', status: 'Busy', available: false },
					{ id: 'd8', name: 'Dr. Suresh Patel', waitingTime: 20, tokensGone: 15, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-ortho',
				name: 'Orthopedics',
				doctors: [
					{ id: 'd3', name: 'Dr. Sree Lekshmi', waitingTime: 15, tokensGone: 10, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd9', name: 'Dr. Rajesh Menon', waitingTime: 30, tokensGone: 22, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-neuro',
				name: 'Neurology',
				doctors: [
					{ id: 'd10', name: 'Dr. Priya Iyer', waitingTime: 35, tokensGone: 25, crowdLevel: 'Very Busy', status: 'Busy', available: false },
					{ id: 'd11', name: 'Dr. Vikram Singh', waitingTime: 12, tokensGone: 8, crowdLevel: 'No Crowd', status: 'Available', available: true }
				]
			},
			{
				id: 's-neuro-surgery',
				name: 'Neurosurgery',
				doctors: [
					{ id: 'd131', name: 'Dr. Ravi Shankar', waitingTime: 48, tokensGone: 36, crowdLevel: 'Very Busy', status: 'Available', available: true },
					{ id: 'd132', name: 'Dr. Deepa Verma', waitingTime: 35, tokensGone: 26, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-trauma',
				name: 'Trauma Surgery',
				doctors: [
					{ id: 'd133', name: 'Dr. Arun Singh', waitingTime: 5, tokensGone: 3, crowdLevel: 'No Crowd', status: 'Available', available: true },
					{ id: 'd134', name: 'Dr. Kavya Nair', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-emergency',
				name: 'Emergency Medicine',
				doctors: [
					{ id: 'd135', name: 'Dr. Hari Kumar', waitingTime: 2, tokensGone: 1, crowdLevel: 'No Crowd', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-kochi',
		name: 'Kochi Medical Center',
		city: 'Kochi',
		specializations: [
			{
				id: 's-pedia',
				name: 'Pediatrics',
				doctors: [
					{ id: 'd4', name: 'Dr. Meera Menon', waitingTime: 20, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd5', name: 'Dr. Vinod Thomas', waitingTime: 60, tokensGone: 50, crowdLevel: 'Very Busy', status: 'Busy', available: false },
					{ id: 'd12', name: 'Dr. Anjali Sharma', waitingTime: 18, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-medicine',
				name: 'General Medicine',
				doctors: [
					{ id: 'd6', name: 'Dr. Leena Varghese', waitingTime: 10, tokensGone: 8, crowdLevel: 'No Crowd', status: 'Available', available: true },
					{ id: 'd13', name: 'Dr. Arun Kumar', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-surgery',
				name: 'Surgery',
				doctors: [
					{ id: 'd14', name: 'Dr. Harsh Desai', waitingTime: 45, tokensGone: 35, crowdLevel: 'Very Busy', status: 'Busy', available: false },
					{ id: 'd15', name: 'Dr. Neha Kapoor', waitingTime: 22, tokensGone: 16, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-anesthesia',
				name: 'Anesthesiology',
				doctors: [
					{ id: 'd136', name: 'Dr. Anil Sharma', waitingTime: 15, tokensGone: 10, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd137', name: 'Dr. Sneha Patel', waitingTime: 20, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-icu',
				name: 'Intensive Care Unit',
				doctors: [
					{ id: 'd138', name: 'Dr. Rajesh Kumar', waitingTime: 8, tokensGone: 5, crowdLevel: 'No Crowd', status: 'Available', available: true }
				]
			},
			{
				id: 's-neonatology',
				name: 'Neonatology',
				doctors: [
					{ id: 'd139', name: 'Dr. Priya Menon', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-kozh',
		name: 'Kozhikode Care Hospital',
		city: 'Kozhikode',
		specializations: [
			{
				id: 's-ent',
				name: 'ENT',
				doctors: [
					{ id: 'd7', name: 'Dr. Arun Jose', waitingTime: 5, tokensGone: 3, crowdLevel: 'No Crowd', status: 'Available', available: true },
					{ id: 'd16', name: 'Dr. Deepak Nair', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-dentistry',
				name: 'Dentistry',
				doctors: [
					{ id: 'd17', name: 'Dr. Priya Verma', waitingTime: 15, tokensGone: 10, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd18', name: 'Dr. Anil Bhat', waitingTime: 38, tokensGone: 28, crowdLevel: 'Very Busy', status: 'Busy', available: false }
				]
			},
			{
				id: 's-audiology',
				name: 'Audiology & Speech Pathology',
				doctors: [
					{ id: 'd140', name: 'Dr. Meena Iyer', waitingTime: 12, tokensGone: 8, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-maxillo',
				name: 'Oral & Maxillofacial Surgery',
				doctors: [
					{ id: 'd141', name: 'Dr. Vikram Kulkarni', waitingTime: 20, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-medicine-kozhikode-care',
				name: 'General Medicine',
				doctors: [
					{ id: 'd178', name: 'Dr. Arun Verma', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-surgery-kozhikode-care',
				name: 'Surgery',
				doctors: [
					{ id: 'd179', name: 'Dr. Meena Singh', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-orthopedics-kozhikode-care',
				name: 'Orthopedics',
				doctors: [
					{ id: 'd180', name: 'Dr. Rajesh Nair', waitingTime: 22, tokensGone: 16, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-ernkm',
		name: 'Ernakulam Medical Institute',
		city: 'Ernakulam',
		specializations: [
			{
				id: 's-oncology',
				name: 'Oncology',
				doctors: [
					{ id: 'd19', name: 'Dr. Rajesh Pandey', waitingTime: 50, tokensGone: 42, crowdLevel: 'Very Busy', status: 'Busy', available: false },
					{ id: 'd20', name: 'Dr. Sunita Roy', waitingTime: 32, tokensGone: 24, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-gastro',
				name: 'Gastroenterology',
				doctors: [
					{ id: 'd21', name: 'Dr. Karan Singh', waitingTime: 20, tokensGone: 15, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd22', name: 'Dr. Sneha Gupta', waitingTime: 12, tokensGone: 9, crowdLevel: 'No Crowd', status: 'Available', available: true }
				]
			},
			{
				id: 's-vascular',
				name: 'Vascular Surgery',
				doctors: [
					{ id: 'd142', name: 'Dr. Sanjay Verma', waitingTime: 32, tokensGone: 24, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-infectious',
				name: 'Infectious Diseases',
				doctors: [
					{ id: 'd143', name: 'Dr. Anita Dutta', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-hematology',
				name: 'Hematology',
				doctors: [
					{ id: 'd144', name: 'Dr. Rajesh Iyer', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-rheumatology-ernakulam',
				name: 'Rheumatology',
				doctors: [
					{ id: 'd181', name: 'Dr. Priya Sharma', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-nephrology-ernakulam',
				name: 'Nephrology',
				doctors: [
					{ id: 'd182', name: 'Dr. Vikram Singh', waitingTime: 32, tokensGone: 24, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-kkm',
		name: 'Kannur Medical Complex',
		city: 'Kannur',
		specializations: [
			{
				id: 's-ophthal',
				name: 'Ophthalmology',
				doctors: [
					{ id: 'd23', name: 'Dr. Anita Nambiar', waitingTime: 10, tokensGone: 7, crowdLevel: 'No Crowd', status: 'Available', available: true },
					{ id: 'd24', name: 'Dr. Vikram Malhotra', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-uro',
				name: 'Urology',
				doctors: [
					{ id: 'd25', name: 'Dr. Mohan Rao', waitingTime: 35, tokensGone: 26, crowdLevel: 'Very Busy', status: 'Busy', available: false },
					{ id: 'd26', name: 'Dr. Pooja Singh', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-derm',
				name: 'Dermatology',
				doctors: [
					{ id: 'd27', name: 'Dr. Sunil Kumar', waitingTime: 8, tokensGone: 5, crowdLevel: 'No Crowd', status: 'Available', available: true }
				]
			},
			{
				id: 's-pediatric-card',
				name: 'Pediatric Cardiology',
				doctors: [
					{ id: 'd145', name: 'Dr. Somya Nair', waitingTime: 30, tokensGone: 22, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-sports-med',
				name: 'Sports Medicine',
				doctors: [
					{ id: 'd146', name: 'Dr. Rajesh Singh', waitingTime: 15, tokensGone: 10, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-occupational',
				name: 'Occupational Health',
				doctors: [
					{ id: 'd147', name: 'Dr. Priya Sharma', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-idkm',
		name: 'Idukki District Hospital',
		city: 'Idukki',
		specializations: [
			{
				id: 's-pathology',
				name: 'Pathology',
				doctors: [
					{ id: 'd28', name: 'Dr. Rajiv Patel', waitingTime: 15, tokensGone: 11, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd29', name: 'Dr. Neha Joshi', waitingTime: 22, tokensGone: 16, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-radiology',
				name: 'Radiology',
				doctors: [
					{ id: 'd30', name: 'Dr. Arjun Reddy', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd31', name: 'Dr. Divya Menon', waitingTime: 42, tokensGone: 32, crowdLevel: 'Very Busy', status: 'Busy', available: false }
				]
			},
			{
				id: 's-medicine-idkm',
				name: 'General Medicine',
				doctors: [
					{ id: 'd166', name: 'Dr. Mohan Pillai', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-surgery-idkm',
				name: 'Surgery',
				doctors: [
					{ id: 'd167', name: 'Dr. Vikram Nair', waitingTime: 38, tokensGone: 28, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-mapm',
		name: 'Malappuram Primary Hospital',
		city: 'Malappuram',
		specializations: [
			{
				id: 's-psych',
				name: 'Psychiatry',
				doctors: [
					{ id: 'd32', name: 'Dr. Ananya Bhat', waitingTime: 30, tokensGone: 22, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd33', name: 'Dr. Sanjay Verma', waitingTime: 40, tokensGone: 30, crowdLevel: 'Very Busy', status: 'Busy', available: false }
				]
			},
			{
				id: 's-physio',
				name: 'Physiotherapy',
				doctors: [
					{ id: 'd34', name: 'Dr. Ravi Kumar', waitingTime: 12, tokensGone: 8, crowdLevel: 'No Crowd', status: 'Available', available: true }
				]
			},
			{
				id: 's-geriatrics-malap',
				name: 'Geriatrics',
				doctors: [
					{ id: 'd168', name: 'Dr. Leena Verma', waitingTime: 20, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-community-malap',
				name: 'Community Medicine',
				doctors: [
					{ id: 'd169', name: 'Dr. Arun Menon', waitingTime: 15, tokensGone: 10, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-wym',
		name: 'Waynad Wellness Hospital',
		city: 'Wayanad',
		specializations: [
			{
				id: 's-rheum',
				name: 'Rheumatology',
				doctors: [
					{ id: 'd35', name: 'Dr. Snehal Patil', waitingTime: 20, tokensGone: 15, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd36', name: 'Dr. Nitin Sharma', waitingTime: 35, tokensGone: 26, crowdLevel: 'Very Busy', status: 'Busy', available: false }
				]
			},
			{
				id: 's-nephro',
				name: 'Nephrology',
				doctors: [
					{ id: 'd37', name: 'Dr. Geeta Singh', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-cardiology-wym',
				name: 'Cardiology',
				doctors: [
					{ id: 'd170', name: 'Dr. Sunita Singh', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-orthopedics-wym',
				name: 'Orthopedics',
				doctors: [
					{ id: 'd171', name: 'Dr. Rajesh Kumar', waitingTime: 22, tokensGone: 16, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-patm',
		name: 'Pathanamthitta Care Center',
		city: 'Pathanamthitta',
		specializations: [
			{
				id: 's-pulmono',
				name: 'Pulmonology',
				doctors: [
					{ id: 'd38', name: 'Dr. Vikram Kulkarni', waitingTime: 22, tokensGone: 16, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd39', name: 'Dr. Priya Desai', waitingTime: 18, tokensGone: 13, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-endoc',
				name: 'Endocrinology',
				doctors: [
					{ id: 'd40', name: 'Dr. Arun Nair', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-pediatrics-pat',
				name: 'Pediatrics',
				doctors: [
					{ id: 'd172', name: 'Dr. Priya Singh', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-psychiatry-pat',
				name: 'Psychiatry',
				doctors: [
					{ id: 'd173', name: 'Dr. Meena Nair', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-gmctvm',
		name: 'Government Medical College Thiruvananthapuram',
		city: 'Thiruvananthapuram',
		specializations: [
			{
				id: 's-cardio-gm1',
				name: 'Cardiology',
				doctors: [
					{ id: 'd41', name: 'Dr. M. S. Krishnan', waitingTime: 35, tokensGone: 28, crowdLevel: 'Very Busy', status: 'Available', available: true },
					{ id: 'd42', name: 'Dr. Sowmya Pillai', waitingTime: 30, tokensGone: 22, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd43', name: 'Dr. Sanjay Menon', waitingTime: 50, tokensGone: 40, crowdLevel: 'Very Busy', status: 'Busy', available: false }
				]
			},
			{
				id: 's-medicine-gm1',
				name: 'General Medicine',
				doctors: [
					{ id: 'd44', name: 'Dr. Rajesh Varma', waitingTime: 20, tokensGone: 15, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd45', name: 'Dr. Anjali Kumar', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-obs-gm1',
				name: 'Obstetrics & Gynecology',
				doctors: [
					{ id: 'd46', name: 'Dr. Deepa Nair', waitingTime: 40, tokensGone: 32, crowdLevel: 'Very Busy', status: 'Available', available: true },
					{ id: 'd47', name: 'Dr. Kavya Singh', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-orthopedics-gmc1',
				name: 'Orthopedics',
				doctors: [
					{ id: 'd174', name: 'Dr. Sanjay Patel', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-surgery-gmc1',
				name: 'Surgery',
				doctors: [
					{ id: 'd175', name: 'Dr. Rahul Verma', waitingTime: 40, tokensGone: 30, crowdLevel: 'Very Busy', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-gmckchi',
		name: 'Government Medical College Kochi',
		city: 'Kochi',
		specializations: [
			{
				id: 's-ortho-gm2',
				name: 'Orthopedics',
				doctors: [
					{ id: 'd48', name: 'Dr. P. K. Sharma', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd49', name: 'Dr. Neha Reddy', waitingTime: 32, tokensGone: 24, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd50', name: 'Dr. Vikram Patel', waitingTime: 45, tokensGone: 35, crowdLevel: 'Very Busy', status: 'Busy', available: false }
				]
			},
			{
				id: 's-pedia-gm2',
				name: 'Pediatrics',
				doctors: [
					{ id: 'd51', name: 'Dr. Sheila Menon', waitingTime: 22, tokensGone: 16, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd52', name: 'Dr. Arjun Das', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-neuro-gm2',
				name: 'Neurology',
				doctors: [
					{ id: 'd53', name: 'Dr. Sunita Verma', waitingTime: 38, tokensGone: 28, crowdLevel: 'Very Busy', status: 'Busy', available: false },
					{ id: 'd54', name: 'Dr. Rohit Singh', waitingTime: 20, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-medicine-gm2',
				name: 'General Medicine',
				doctors: [
					{ id: 'd176', name: 'Dr. Meena Desai', waitingTime: 22, tokensGone: 16, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-psychiatry-gm2',
				name: 'Psychiatry',
				doctors: [
					{ id: 'd177', name: 'Dr. Vikash Kumar', waitingTime: 32, tokensGone: 24, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-gmckozh',
		name: 'Government Medical College Kozhikode',
		city: 'Kozhikode',
		specializations: [
			{
				id: 's-surgery-gm3',
				name: 'Surgery',
				doctors: [
					{ id: 'd55', name: 'Dr. Anil Kumar M.', waitingTime: 55, tokensGone: 45, crowdLevel: 'Very Busy', status: 'Busy', available: false },
					{ id: 'd56', name: 'Dr. Priya Nambiar', waitingTime: 35, tokensGone: 26, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd57', name: 'Dr. Sanjay Iyer', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-medicine-gm3',
				name: 'General Medicine',
				doctors: [
					{ id: 'd58', name: 'Dr. Leena Pillai', waitingTime: 20, tokensGone: 15, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd59', name: 'Dr. Harish Kumar', waitingTime: 32, tokensGone: 24, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-orthopedics-gm3',
				name: 'Orthopedics',
				doctors: [
					{ id: 'd194', name: 'Dr. Deepak Menon', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-pediatrics-gm3',
				name: 'Pediatrics',
				doctors: [
					{ id: 'd195', name: 'Dr. Priya Kumar', waitingTime: 20, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-dhtkm',
		name: 'District Hospital Thrissur',
		city: 'Thrissur',
		specializations: [
			{
				id: 's-medicine-dh1',
				name: 'General Medicine',
				doctors: [
					{ id: 'd60', name: 'Dr. N. K. Sharma', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd61', name: 'Dr. Meera Nair', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd62', name: 'Dr. Rajesh Pillai', waitingTime: 42, tokensGone: 32, crowdLevel: 'Very Busy', status: 'Busy', available: false }
				]
			},
			{
				id: 's-pedia-dh1',
				name: 'Pediatrics',
				doctors: [
					{ id: 'd63', name: 'Dr. Aditi Verma', waitingTime: 20, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd64', name: 'Dr. Sanjay Nair', waitingTime: 35, tokensGone: 26, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-ortho-dh1',
				name: 'Orthopedics',
				doctors: [
					{ id: 'd184', name: 'Dr. Meena Nair', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-ent-dh1',
				name: 'ENT',
				doctors: [
					{ id: 'd185', name: 'Dr. Sanjay Kumar', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-dherm',
		name: 'District Hospital Ernakulam',
		city: 'Ernakulam',
		specializations: [
			{
				id: 's-surgery-dh2',
				name: 'Surgery',
				doctors: [
					{ id: 'd65', name: 'Dr. Ramesh K. T.', waitingTime: 45, tokensGone: 35, crowdLevel: 'Very Busy', status: 'Busy', available: false },
					{ id: 'd66', name: 'Dr. Priya Dutta', waitingTime: 30, tokensGone: 22, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-ortho-dh2',
				name: 'Orthopedics',
				doctors: [
					{ id: 'd67', name: 'Dr. Vikram Rao', waitingTime: 22, tokensGone: 16, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd68', name: 'Dr. Anjali Sharma', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-cardio-dh2',
				name: 'Cardiology',
				doctors: [
					{ id: 'd69', name: 'Dr. Suresh Menon', waitingTime: 40, tokensGone: 32, crowdLevel: 'Very Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-medicine-dh2',
				name: 'General Medicine',
				doctors: [
					{ id: 'd186', name: 'Dr. Priya Dutta', waitingTime: 20, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-pediatrics-dh2',
				name: 'Pediatrics',
				doctors: [
					{ id: 'd187', name: 'Dr. Arun Kumar', waitingTime: 22, tokensGone: 16, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-dhkzd',
		name: 'District Hospital Kannur',
		city: 'Kannur',
		specializations: [
			{
				id: 's-medicine-dh3',
				name: 'General Medicine',
				doctors: [
					{ id: 'd70', name: 'Dr. Gopal Nair', waitingTime: 15, tokensGone: 11, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd71', name: 'Dr. Deepa Singh', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-ent-dh3',
				name: 'ENT',
				doctors: [
					{ id: 'd72', name: 'Dr. Ravi Kumar', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd73', name: 'Dr. Sneha Desai', waitingTime: 32, tokensGone: 24, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-orthopedics-dh3',
				name: 'Orthopedics',
				doctors: [
					{ id: 'd188', name: 'Dr. Vikram Pillai', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-phctvm',
		name: 'Primary Health Center Varkala',
		city: 'Thiruvananthapuram',
		specializations: [
			{
				id: 's-medicine-phc1',
				name: 'General Medicine',
				doctors: [
					{ id: 'd74', name: 'Dr. Mohan P.', waitingTime: 10, tokensGone: 7, crowdLevel: 'No Crowd', status: 'Available', available: true },
					{ id: 'd75', name: 'Dr. Lakshmi Nair', waitingTime: 15, tokensGone: 10, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-maternity-phc1',
				name: 'Maternal Health',
				doctors: [
					{ id: 'd76', name: 'Dr. Asha Kumari', waitingTime: 12, tokensGone: 8, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-pediatrics-phc1',
				name: 'Pediatrics',
				doctors: [
					{ id: 'd189', name: 'Dr. Leena Menon', waitingTime: 15, tokensGone: 10, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-phckchi',
		name: 'Community Health Center Mattancherry',
		city: 'Kochi',
		specializations: [
			{
				id: 's-medicine-phc2',
				name: 'General Medicine',
				doctors: [
					{ id: 'd77', name: 'Dr. Suresh Kumar', waitingTime: 12, tokensGone: 9, crowdLevel: 'No Crowd', status: 'Available', available: true },
					{ id: 'd78', name: 'Dr. Priya Menon', waitingTime: 18, tokensGone: 13, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd79', name: 'Dr. Rajesh Pillai', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-child-phc2',
				name: 'Child Health',
				doctors: [
					{ id: 'd80', name: 'Dr. Anjali Verma', waitingTime: 15, tokensGone: 10, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-pediatrics-phc2',
				name: 'Pediatrics',
				doctors: [
					{ id: 'd190', name: 'Dr. Suresh Nair', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-phckzd',
		name: 'Taluk Hospital Kannur',
		city: 'Kannur',
		specializations: [
			{
				id: 's-medicine-phc3',
				name: 'General Medicine',
				doctors: [
					{ id: 'd81', name: 'Dr. Anil Nair', waitingTime: 8, tokensGone: 5, crowdLevel: 'No Crowd', status: 'Available', available: true },
					{ id: 'd82', name: 'Dr. Meera Iyer', waitingTime: 20, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-emergency-phc3',
				name: 'Emergency Medicine',
				doctors: [
					{ id: 'd83', name: 'Dr. Vikram Singh', waitingTime: 5, tokensGone: 3, crowdLevel: 'No Crowd', status: 'Available', available: true },
					{ id: 'd84', name: 'Dr. Priya Sharma', waitingTime: 15, tokensGone: 11, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-pediatrics-phc3',
				name: 'Pediatrics',
				doctors: [
					{ id: 'd191', name: 'Dr. Meera Iyer', waitingTime: 20, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-kims',
		name: 'Kerala Institute of Medical Sciences (KIMS)',
		city: 'Thiruvananthapuram',
		specializations: [
			{
				id: 's-cardio-kims',
				name: 'Cardiology',
				doctors: [
					{ id: 'd85', name: 'Dr. Rajesh Iyer', waitingTime: 35, tokensGone: 28, crowdLevel: 'Very Busy', status: 'Available', available: true },
					{ id: 'd86', name: 'Dr. Sophia Menon', waitingTime: 42, tokensGone: 34, crowdLevel: 'Very Busy', status: 'Available', available: true },
					{ id: 'd87', name: 'Dr. Sanjay Kumar', waitingTime: 55, tokensGone: 45, crowdLevel: 'Very Busy', status: 'Busy', available: false }
				]
			},
			{
				id: 's-oncology-kims',
				name: 'Oncology',
				doctors: [
					{ id: 'd88', name: 'Dr. Amrita Pillai', waitingTime: 50, tokensGone: 40, crowdLevel: 'Very Busy', status: 'Available', available: true },
					{ id: 'd89', name: 'Dr. Nikhil Sharma', waitingTime: 38, tokensGone: 28, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-nephro-kims',
				name: 'Nephrology',
				doctors: [
					{ id: 'd90', name: 'Dr. Vinay Nair', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd91', name: 'Dr. Anupama Verma', waitingTime: 32, tokensGone: 24, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-surgery-kims',
				name: 'Surgery',
				doctors: [
					{ id: 'd92', name: 'Dr. Raghav Singh', waitingTime: 48, tokensGone: 38, crowdLevel: 'Very Busy', status: 'Busy', available: false },
					{ id: 'd93', name: 'Dr. Priya Dutta', waitingTime: 35, tokensGone: 26, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-radiation-onc',
				name: 'Radiation Oncology',
				doctors: [
					{ id: 'd148', name: 'Dr. Deepak Verma', waitingTime: 42, tokensGone: 32, crowdLevel: 'Very Busy', status: 'Available', available: true },
					{ id: 'd149', name: 'Dr. Arti Singh', waitingTime: 35, tokensGone: 26, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-anesthesia-kims',
				name: 'Anesthesiology',
				doctors: [
					{ id: 'd150', name: 'Dr. Mohan Reddy', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-neuro-surgery-kims',
				name: 'Neurosurgery',
				doctors: [
					{ id: 'd151', name: 'Dr. Vikram Kumar', waitingTime: 50, tokensGone: 40, crowdLevel: 'Very Busy', status: 'Busy', available: false }
				]
			}
		]
	},
	{
		id: 'h-amrita',
		name: 'Amrita School of Medicine',
		city: 'Kochi',
		specializations: [
			{
				id: 's-medicine-amrita',
				name: 'General Medicine',
				doctors: [
					{ id: 'd94', name: 'Dr. Arun Verma', waitingTime: 22, tokensGone: 16, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd95', name: 'Dr. Deepika Nair', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd96', name: 'Dr. Sanjiv Pillai', waitingTime: 35, tokensGone: 26, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-pedia-amrita',
				name: 'Pediatrics',
				doctors: [
					{ id: 'd97', name: 'Dr. Meera Sharma', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd98', name: 'Dr. Rajesh Menon', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-ortho-amrita',
				name: 'Orthopedics',
				doctors: [
					{ id: 'd99', name: 'Dr. Vikram Reddy', waitingTime: 32, tokensGone: 24, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd100', name: 'Dr. Shreya Singh', waitingTime: 40, tokensGone: 30, crowdLevel: 'Very Busy', status: 'Busy', available: false }
				]
			},
			{
				id: 's-neuro-amrita',
				name: 'Neurology',
				doctors: [
					{ id: 'd101', name: 'Dr. Harish Kumar', waitingTime: 38, tokensGone: 28, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd102', name: 'Dr. Pooja Desai', waitingTime: 45, tokensGone: 34, crowdLevel: 'Very Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-pulmonology-amrita',
				name: 'Pulmonology',
				doctors: [
					{ id: 'd152', name: 'Dr. Anish Menon', waitingTime: 22, tokensGone: 16, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-anesthesia-amrita',
				name: 'Anesthesiology',
				doctors: [
					{ id: 'd153', name: 'Dr. Sneha Nair', waitingTime: 20, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-rheumatology-amrita',
				name: 'Rheumatology',
				doctors: [
					{ id: 'd154', name: 'Dr. Geeta Pillai', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-pushpagiri',
		name: 'Pushpagiri Institute of Medical Sciences',
		city: 'Thiruvalla',
		specializations: [
			{
				id: 's-cardio-pushpa',
				name: 'Cardiology',
				doctors: [
					{ id: 'd103', name: 'Dr. Jacob Thomas', waitingTime: 32, tokensGone: 24, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd104', name: 'Dr. Sheryl Mathews', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-ortho-pushpa',
				name: 'Orthopedics',
				doctors: [
					{ id: 'd105', name: 'Dr. Babu George', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd106', name: 'Dr. Aline Jacob', waitingTime: 35, tokensGone: 26, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd107', name: 'Dr. Stanley Thomas', waitingTime: 42, tokensGone: 32, crowdLevel: 'Very Busy', status: 'Busy', available: false }
				]
			},
			{
				id: 's-medicine-pushpa',
				name: 'General Medicine',
				doctors: [
					{ id: 'd108', name: 'Dr. Elizabeth Roy', waitingTime: 20, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd109', name: 'Dr. Joseph Mathew', waitingTime: 30, tokensGone: 22, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-neurology-pushpa',
				name: 'Neurology',
				doctors: [
					{ id: 'd192', name: 'Dr. Anita Joseph', waitingTime: 32, tokensGone: 24, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-gynecology-pushpa',
				name: 'Obstetrics & Gynecology',
				doctors: [
					{ id: 'd193', name: 'Dr. Mala Sharma', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-sree-chitra',
		name: 'Sree Chitra Tirunal Institute for Medical Sciences',
		city: 'Thiruvananthapuram',
		specializations: [
			{
				id: 's-cardio-sree',
				name: 'Cardiology',
				doctors: [
					{ id: 'd110', name: 'Dr. Brijesh Kumar', waitingTime: 40, tokensGone: 32, crowdLevel: 'Very Busy', status: 'Available', available: true },
					{ id: 'd111', name: 'Dr. Sarita Menon', waitingTime: 48, tokensGone: 38, crowdLevel: 'Very Busy', status: 'Busy', available: false },
					{ id: 'd112', name: 'Dr. Rajesh Verma', waitingTime: 35, tokensGone: 26, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-cardiac-surgery-sree',
				name: 'Cardiac Surgery',
				doctors: [
					{ id: 'd113', name: 'Dr. Anish Pillai', waitingTime: 60, tokensGone: 50, crowdLevel: 'Very Busy', status: 'Busy', available: false },
					{ id: 'd114', name: 'Dr. Meera Iyer', waitingTime: 45, tokensGone: 34, crowdLevel: 'Very Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-interventional-sree',
				name: 'Interventional Radiology',
				doctors: [
					{ id: 'd115', name: 'Dr. Ashok Nair', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd116', name: 'Dr. Divya Sharma', waitingTime: 32, tokensGone: 24, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-thoracic-sree',
				name: 'Thoracic Surgery',
				doctors: [
					{ id: 'd155', name: 'Dr. Sanjay Kapoor', waitingTime: 45, tokensGone: 34, crowdLevel: 'Very Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-vascular-sree',
				name: 'Vascular & Endovascular Surgery',
				doctors: [
					{ id: 'd156', name: 'Dr. Rajesh Nair', waitingTime: 38, tokensGone: 28, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-perfusion-sree',
				name: 'Cardiopulmonary Perfusion',
				doctors: [
					{ id: 'd157', name: 'Dr. Amit Singh', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-mees',
		name: 'Malabar Eye and ENT Hospital',
		city: 'Kozhikode',
		specializations: [
			{
				id: 's-ophthal-mees',
				name: 'Ophthalmology',
				doctors: [
					{ id: 'd117', name: 'Dr. Subroto Nair', waitingTime: 15, tokensGone: 11, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd118', name: 'Dr. Meena Verma', waitingTime: 20, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd119', name: 'Dr. Ravi Iyer', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-ent-mees',
				name: 'ENT',
				doctors: [
					{ id: 'd120', name: 'Dr. Anish Kumar', waitingTime: 12, tokensGone: 8, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd121', name: 'Dr. Priya Nambiar', waitingTime: 22, tokensGone: 16, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd122', name: 'Dr. Sanjay Verma', waitingTime: 35, tokensGone: 26, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-plastic-mees',
				name: 'Plastic Surgery',
				doctors: [
					{ id: 'd123', name: 'Dr. Harini Singh', waitingTime: 30, tokensGone: 22, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd124', name: 'Dr. Vikram Rao', waitingTime: 42, tokensGone: 32, crowdLevel: 'Very Busy', status: 'Busy', available: false }
				]
			},
			{
				id: 's-oculoplasty',
				name: 'Oculoplasty & Orbit Surgery',
				doctors: [
					{ id: 'd158', name: 'Dr. Priya Kumar', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-ophthal-pathology',
				name: 'Ophthalmic Pathology',
				doctors: [
					{ id: 'd159', name: 'Dr. Sanjay Mehta', waitingTime: 20, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-neuro-otology',
				name: 'Neuro-Otology',
				doctors: [
					{ id: 'd160', name: 'Dr. Kavya Singh', waitingTime: 28, tokensGone: 20, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			}
		]
	},
	{
		id: 'h-sunrise',
		name: 'Sunrise Hospital & Research Institute',
		city: 'Kottayam',
		specializations: [
			{
				id: 's-medicine-sunrise',
				name: 'General Medicine',
				doctors: [
					{ id: 'd125', name: 'Dr. Thomas Baby', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd126', name: 'Dr. Mary Paul', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-pedia-sunrise',
				name: 'Pediatrics',
				doctors: [
					{ id: 'd127', name: 'Dr. George Jacob', waitingTime: 20, tokensGone: 14, crowdLevel: 'Normal', status: 'Available', available: true },
					{ id: 'd128', name: 'Dr. Anita Thomas', waitingTime: 32, tokensGone: 24, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-surgery-sunrise',
				name: 'Surgery',
				doctors: [
					{ id: 'd129', name: 'Dr. Anto Jose', waitingTime: 38, tokensGone: 28, crowdLevel: 'Busy', status: 'Available', available: true },
					{ id: 'd130', name: 'Dr. Leela Abraham', waitingTime: 48, tokensGone: 36, crowdLevel: 'Very Busy', status: 'Busy', available: false }
				]
			},
			{
				id: 's-orthopedic-sunrise',
				name: 'Orthopedic Surgery',
				doctors: [
					{ id: 'd161', name: 'Dr. Jacob Mathew', waitingTime: 32, tokensGone: 24, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			},
			{
				id: 's-anesthesia-sunrise',
				name: 'Anesthesiology',
				doctors: [
					{ id: 'd162', name: 'Dr. George Thomas', waitingTime: 18, tokensGone: 12, crowdLevel: 'Normal', status: 'Available', available: true }
				]
			},
			{
				id: 's-geriatrics-sunrise',
				name: 'Geriatrics',
				doctors: [
					{ id: 'd163', name: 'Dr. Mary Joseph', waitingTime: 25, tokensGone: 18, crowdLevel: 'Busy', status: 'Available', available: true }
				]
			}
		]
	}
];

// UI state
let selectedHospitalId = null;
let selectedDoctorId = null;
let refreshInterval = null;

document.addEventListener('DOMContentLoaded', () => {
	switchMode('patient');
	populatePatientHospitalDropdown();
	populateStaffHospitalSelect();
	startAutoRefresh();
});

function startAutoRefresh() {
	if (refreshInterval) clearInterval(refreshInterval);
	refreshInterval = setInterval(() => {
		// Only refresh if patient mode is active
		if (document.getElementById('patientMode').classList.contains('active')) {
			if (selectedHospitalId && selectedDoctorId) {
				displayDoctorDetails();
			}
		}
	}, 3000); // Refresh every 3 seconds
}

function switchMode(mode) {
	const patientMode = document.getElementById('patientMode');
	const staffMode = document.getElementById('staffMode');
	const buttons = document.querySelectorAll('.mode-btn');

	buttons.forEach(b => b.classList.remove('active'));
	document.querySelector(`.mode-btn[onclick="switchMode('${mode}')"]`)?.classList.add('active');

	if (mode === 'patient') {
		patientMode.classList.add('active');
		staffMode.classList.remove('active');
		startAutoRefresh();
	} else {
		patientMode.classList.remove('active');
		staffMode.classList.add('active');
		if (refreshInterval) clearInterval(refreshInterval);
	}
}

// ===== PATIENT MODE FUNCTIONS =====

function populatePatientHospitalDropdown() {
	const select = document.getElementById('patientHospitalSelect');
	select.innerHTML = '<option value="">-- Choose Hospital --</option>';
	hospitals.forEach(h => {
		const option = document.createElement('option');
		option.value = h.id;
		option.textContent = `${h.name} (${h.city})`;
		select.appendChild(option);
	});
}

function handleHospitalChange() {
	const select = document.getElementById('patientHospitalSelect');
	selectedHospitalId = select.value;
	selectedDoctorId = null;
	
	// Reset doctor dropdown
	const doctorSelect = document.getElementById('patientDoctorSelect');
	doctorSelect.innerHTML = '<option value="">-- Choose Doctor --</option>';
	
	// Hide details
	document.getElementById('patientDetails').classList.add('hidden');
	document.getElementById('noSelectionMsg').classList.remove('hidden');
	
	if (!selectedHospitalId) {
		return;
	}

	// Populate doctors from all specializations
	const hospital = hospitals.find(h => h.id === selectedHospitalId);
	if (!hospital) return;

	const allDoctors = [];
	hospital.specializations.forEach(spec => {
		spec.doctors.forEach(doc => {
			allDoctors.push({
				...doc,
				specialization: spec.name
			});
		});
	});

	if (allDoctors.length === 0) {
		doctorSelect.innerHTML = '<option value="">No doctors available</option>';
		return;
	}

	allDoctors.forEach(doc => {
		const option = document.createElement('option');
		option.value = doc.id;
		option.textContent = `${doc.name} (${doc.specialization})`;
		doctorSelect.appendChild(option);
	});
}

function handleDoctorChange() {
	const select = document.getElementById('patientDoctorSelect');
	selectedDoctorId = select.value;

	if (!selectedHospitalId || !selectedDoctorId) {
		document.getElementById('patientDetails').classList.add('hidden');
		document.getElementById('noSelectionMsg').classList.remove('hidden');
		return;
	}

	displayDoctorDetails();
}

function displayDoctorDetails() {
	if (!selectedHospitalId || !selectedDoctorId) return;

	const hospital = hospitals.find(h => h.id === selectedHospitalId);
	if (!hospital) return;

	let doctor = null;
	let specialization = null;

	// Find the doctor and their specialization
	for (let spec of hospital.specializations) {
		const found = spec.doctors.find(d => d.id === selectedDoctorId);
		if (found) {
			doctor = found;
			specialization = spec.name;
			break;
		}
	}

	if (!doctor) return;

	// Check if staff has updated the info (has non-default values)
	const hasUpdates = doctor.waitingTime !== 0 || doctor.tokensGone !== 0 || doctor.status !== 'Available';

	document.getElementById('patientDoctorTitle').textContent = `${doctor.name} - ${specialization}`;
	document.getElementById('patientWaitingTime').textContent = `${doctor.waitingTime} mins`;
	document.getElementById('patientTokensGone').textContent = doctor.tokensGone;
	document.getElementById('patientCrowdLevel').textContent = doctor.crowdLevel;
	document.getElementById('patientDoctorStatus').textContent = doctor.status;

	const noUpdatesMsg = document.getElementById('noUpdatesMsg');
	if (!hasUpdates) {
		noUpdatesMsg.textContent = 'ℹ️ No updates yet from staff';
	} else {
		noUpdatesMsg.textContent = '';
	}

	document.getElementById('patientDetails').classList.remove('hidden');
	document.getElementById('noSelectionMsg').classList.add('hidden');
}

// ===== REMOVED: Old step-based functions (populateHospitalList, searchHospitals, selectHospital, etc.) =====

// ===== STAFF MODE FUNCTIONS =====

// Staff helpers (minimal, to keep existing UI functional)
function populateStaffHospitalSelect() {
	const sel = document.getElementById('staffHospital');
	if (!sel) return;
	sel.innerHTML = '<option value="">Select Hospital</option>' + hospitals.map(h => `<option value="${h.id}">${h.name}</option>`).join('');
}

function loadStaffDepartments() {
	const hid = document.getElementById('staffHospital').value;
	const deptSel = document.getElementById('staffDepartment');
	const docSel = document.getElementById('staffDoctor');
	deptSel.innerHTML = '<option value="">Select Department</option>';
	docSel.innerHTML = '<option value="">Select Doctor</option>';
	const h = hospitals.find(x => x.id === hid);
	if (!h) return;
	deptSel.innerHTML += h.specializations.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
}

function loadStaffDoctors() {
	const hid = document.getElementById('staffHospital').value;
	const did = document.getElementById('staffDepartment').value;
	const docSel = document.getElementById('staffDoctor');
	docSel.innerHTML = '<option value="">Select Doctor</option>';
	const h = hospitals.find(x => x.id === hid);
	if (!h) return;
	const s = h.specializations.find(x => x.id === did);
	if (!s) return;
	docSel.innerHTML += s.doctors.map(d => `<option value="${d.id}">${d.name}</option>`).join('');
}

function submitStaffUpdate(e) {
	e.preventDefault();
	const hid = document.getElementById('staffHospital').value;
	const did = document.getElementById('staffDepartment').value;
	const docId = document.getElementById('staffDoctor').value;
	const waiting = Number(document.getElementById('waitingTimeInput').value || 0);
	const tokens = Number(document.getElementById('tokensGoneInput').value || 0);
	const crowd = document.getElementById('crowdLevelInput').value;
	const status = document.getElementById('doctorAvailabilityInput').value;

	const h = hospitals.find(x => x.id === hid);
	if (!h) return showStaffMessage('error', 'Hospital not found');
	const s = h.specializations.find(x => x.id === did);
	if (!s) return showStaffMessage('error', 'Department not found');
	const d = s.doctors.find(x => x.id === docId);
	if (!d) return showStaffMessage('error', 'Doctor not found');

	d.waitingTime = waiting;
	d.tokensGone = tokens;
	d.crowdLevel = crowd;
	d.status = status;
	d.available = (status === 'Available');

	showStaffMessage('success', 'Information updated');
	// if user is currently viewing this doctor, refresh details
	if (selectedDoctor && selectedDoctor.id === d.id) {
		selectDoctor(d.id);
	}
}

function showStaffMessage(kind, text) {
	const el = document.getElementById('staffMessage');
	el.className = `message ${kind}`;
	el.innerText = text;
	setTimeout(() => el.classList.add('hidden'), 3500);
}
