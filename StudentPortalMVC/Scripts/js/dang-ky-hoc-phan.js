const courses = [
    {
        id: 1,
        code: 'THCS101',
        name: 'Lập trình hướng đối tượng',
        credits: 4,
        required: true,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },

    {
        id: 2,
        code: 'THCS102',
        name: 'Cấu trúc dữ liệu và giải thuật',
        credits: 4,
        required: true,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },

    {
        id: 3,
        code: 'THCS201',
        name: 'Cơ sở dữ liệu',
        credits: 3,
        required: true,
        condition: 'A', 
        prerequisiteId: 1, 
        type: 'new',
    },

    {
        id: 4,
        code: 'THCS202',
        name: 'Lập trình Web',
        credits: 4,
        required: true,
        condition: 'B', 
        prerequisiteId: 1, 
        type: 'new',
    },

    {
        id: 5,
        code: 'THCS203',
        name: 'Hệ điều hành',
        credits: 3,
        required: true,
        condition: 'C', 
        prerequisiteId: 2,
        type: 'new',
    },

    {
        id: 6,
        code: 'THCS204',
        name: 'Mạng máy tính',
        credits: 3,
        required: false,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },

    {
        id: 7,
        code: 'THCS301',
        name: 'Công nghệ phần mềm',
        credits: 3,
        required: true,
        condition: 'B', 
        prerequisiteId: 3, 
        type: 'new',
    },

    {
        id: 8,
        code: 'THCS302',
        name: 'Phát triển ứng dụng di động',
        credits: 4,
        required: false,
        condition: 'A', 
        prerequisiteId: 4, 
        type: 'new',
    },

    {
        id: 9,
        code: 'THCS303',
        name: 'Trí tuệ nhân tạo',
        credits: 3,
        required: false,
        condition: 'C',
        prerequisiteId: 2, 
        type: 'new',
    },

    {
        id: 10,
        code: 'THCS304',
        name: 'An toàn thông tin',
        credits: 3,
        required: true,
        condition: 'A', 
        prerequisiteId: 6,
        type: 'new',
    },

    {
        id: 11,
        code: 'THCS401',
        name: 'Thực tập dự án',
        credits: 4,
        required: true,
        condition: 'B', 
        prerequisiteId: 7, 
        type: 'new',
    },

    {
        id: 12,
        code: 'THCS402',
        name: 'Phân tích dữ liệu lớn',
        credits: 3,
        required: false,
        condition: 'B', 
        prerequisiteId: 3, 
        type: 'new',
    },
];

// Data lớp học phần
const classes = {
    1: [

        {
            id: '01',
            courseCode: 'THCS101',
            courseName: 'Lập trình hướng đối tượng',
            credits: 4,
            slots: 100,
            registered: 30,
            registered: 30,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.101',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Nguyễn Văn A',
                    slots: 100,
                    registered: 30,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 4 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Trần Thị B',
                    slots: 30,
                    registered: 10,
                },
                {
                    group: 2,
                    day: 'Th 5 (Tiết 7 -> 9)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Trần Thị B',
                    slots: 30,
                    registered: 10,
                },
            ],
        },
        // Lớp 02 - Đang lên kế hoạch (65/100)
        {
            id: '02',
            courseCode: 'THCS101',
            courseName: 'Lập trình hướng đối tượng',
            credits: 4,
            slots: 100,
            registered: 65,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.102',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Lê Văn C',
                    slots: 100,
                    registered: 65,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 6 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Phạm Văn D',
                    slots: 35,
                    registered: 30,
                },
                {
                    group: 2,
                    day: 'Th 7 (Tiết 7 -> 9)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Phạm Văn D',
                    slots: 35,
                    registered: 35,
                },
            ],
        },
        // Lớp 03 - Đã khóa (80/80)
        {
            id: '03',
            courseCode: 'THCS101',
            courseName: 'Lập trình hướng đối tượng',
            credits: 4,
            slots: 80,
            registered: 80,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.103',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Võ Thị E',
                    slots: 80,
                    registered: 80,
                },
            ],
            practiceClasses: [],
        },
    ],

    // Môn 2: Cấu trúc dữ liệu và giải thuật - THCS102
    2: [
        // Lớp 01 - Chờ sinh viên đăng ký (25/100)
        {
            id: '01',
            courseCode: 'THCS102',
            courseName: 'Cấu trúc dữ liệu và giải thuật',
            credits: 4,
            slots: 100,
            registered: 25,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.201',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Hoàng Văn F',
                    slots: 100,
                    registered: 25,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 3 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B2.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Đỗ Thị G',
                    slots: 30,
                    registered: 12,
                },
            ],
        },
        // Lớp 02 - Đang lên kế hoạch (70/90)
        {
            id: '02',
            courseCode: 'THCS102',
            courseName: 'Cấu trúc dữ liệu và giải thuật',
            credits: 4,
            slots: 90,
            registered: 70,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T4',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.202',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Bùi Văn H',
                    slots: 90,
                    registered: 70,
                },
            ],
            practiceClasses: [],
        },
        // Lớp 03 - Đã khóa (100/100)
        {
            id: '03',
            courseCode: 'THCS102',
            courseName: 'Cấu trúc dữ liệu và giải thuật',
            credits: 4,
            slots: 100,
            registered: 100,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T6',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.203',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Ngô Văn I',
                    slots: 100,
                    registered: 100,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B2.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Mai Thị J',
                    slots: 35,
                    registered: 35,
                },
            ],
        },
    ],

    // Môn 3: Cơ sở dữ liệu - THCS201
    3: [
        // Lớp 01 - Chờ sinh viên đăng ký (35/120)
        {
            id: '01',
            courseCode: 'THCS201',
            courseName: 'Cơ sở dữ liệu',
            credits: 3,
            slots: 120,
            registered: 35,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.301',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Lý Văn K',
                    slots: 120,
                    registered: 35,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 5 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Vũ Văn L',
                    slots: 40,
                    registered: 15,
                },
                {
                    group: 2,
                    day: 'Th 6 (Tiết 7 -> 9)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Vũ Văn L',
                    slots: 40,
                    registered: 10,
                },
            ],
        },
        // Lớp 02 - Đang lên kế hoạch (85/110)
        {
            id: '02',
            courseCode: 'THCS201',
            courseName: 'Cơ sở dữ liệu',
            credits: 3,
            slots: 110,
            registered: 85,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.302',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Đặng Thị M',
                    slots: 110,
                    registered: 85,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 2 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Trương Văn N',
                    slots: 40,
                    registered: 38,
                },
            ],
        },
        // Lớp 03 - Đã khóa (90/90)
        {
            id: '03',
            courseCode: 'THCS201',
            courseName: 'Cơ sở dữ liệu',
            credits: 3,
            slots: 90,
            registered: 90,
            registered: 90,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T7',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.303',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Phan Văn O',
                    slots: 90,
                    registered: 90,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.03',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Huỳnh Thị P',
                    slots: 30,
                    registered: 30,
                },
            ],
        },
    ],

    // Môn 4-12: Tạo data tương tự (mỗi môn 3 lớp: chờ đăng ký, đang lên kế hoạch, đã khóa)
    4: [
        {
            id: '01',
            courseCode: 'THCS202',
            courseName: 'Lập trình Web',
            credits: 4,
            slots: 100,
            registered: 40,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Sáng (1 -> 4)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.401',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Nguyễn Q',
                    slots: 100,
                    registered: 40,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 3 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B4.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Trần R',
                    slots: 30,
                    registered: 15,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS202',
            courseName: 'Lập trình Web',
            credits: 4,
            slots: 90,
            registered: 70,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T4',
                    time: 'Chiều (7 -> 10)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.402',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Lê S',
                    slots: 90,
                    registered: 70,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS202',
            courseName: 'Lập trình Web',
            credits: 4,
            slots: 80,
            registered: 80,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T6',
                    time: 'Sáng (1 -> 4)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.403',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Phạm T',
                    slots: 80,
                    registered: 80,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B4.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Võ U',
                    slots: 30,
                    registered: 30,
                },
            ],
        },
    ],

    5: [
        {
            id: '01',
            courseCode: 'THCS203',
            courseName: 'Hệ điều hành',
            credits: 3,
            slots: 100,
            registered: 35,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.501',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Hoàng V',
                    slots: 100,
                    registered: 35,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 5 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B5.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Đỗ W',
                    slots: 35,
                    registered: 12,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS203',
            courseName: 'Hệ điều hành',
            credits: 3,
            slots: 95,
            registered: 60,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.502',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Bùi X',
                    slots: 95,
                    registered: 60,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS203',
            courseName: 'Hệ điều hành',
            credits: 3,
            slots: 85,
            registered: 85,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T7',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.503',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Ngô Y',
                    slots: 85,
                    registered: 85,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 7 -> 9)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B5.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Lý Z',
                    slots: 30,
                    registered: 30,
                },
            ],
        },
    ],

    6: [
        {
            id: '01',
            courseCode: 'THCS204',
            courseName: 'Mạng máy tính',
            credits: 3,
            slots: 110,
            registered: 45,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.601',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Mai AA',
                    slots: 110,
                    registered: 45,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 4 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B6.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Vũ BB',
                    slots: 40,
                    registered: 18,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS204',
            courseName: 'Mạng máy tính',
            credits: 3,
            slots: 100,
            registered: 75,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T4',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.602',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Trương CC',
                    slots: 100,
                    registered: 75,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS204',
            courseName: 'Mạng máy tính',
            credits: 3,
            slots: 90,
            registered: 90,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T6',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.603',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Phan DD',
                    slots: 90,
                    registered: 90,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 2 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B6.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Huỳnh EE',
                    slots: 30,
                    registered: 30,
                },
            ],
        },
    ],

    7: [
        {
            id: '01',
            courseCode: 'THCS301',
            courseName: 'Công nghệ phần mềm',
            credits: 3,
            slots: 100,
            registered: 38,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.701',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Nguyễn FF',
                    slots: 100,
                    registered: 38,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 6 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B7.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Trần GG',
                    slots: 35,
                    registered: 15,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS301',
            courseName: 'Công nghệ phần mềm',
            credits: 3,
            slots: 95,
            registered: 68,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.702',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Lê HH',
                    slots: 95,
                    registered: 68,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS301',
            courseName: 'Công nghệ phần mềm',
            credits: 3,
            slots: 85,
            registered: 85,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T7',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.703',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Phạm II',
                    slots: 85,
                    registered: 85,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B7.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Võ JJ',
                    slots: 30,
                    registered: 30,
                },
            ],
        },
    ],

    8: [
        {
            id: '01',
            courseCode: 'THCS302',
            courseName: 'Phát triển ứng dụng di động',
            credits: 4,
            slots: 90,
            registered: 42,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Sáng (1 -> 4)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.801',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Hoàng KK',
                    slots: 90,
                    registered: 42,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 3 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B8.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Đỗ LL',
                    slots: 30,
                    registered: 14,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS302',
            courseName: 'Phát triển ứng dụng di động',
            credits: 4,
            slots: 85,
            registered: 62,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T4',
                    time: 'Chiều (7 -> 10)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.802',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Bùi MM',
                    slots: 85,
                    registered: 62,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS302',
            courseName: 'Phát triển ứng dụng di động',
            credits: 4,
            slots: 80,
            registered: 80,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T6',
                    time: 'Sáng (1 -> 4)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.803',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Ngô NN',
                    slots: 80,
                    registered: 80,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 7 -> 9)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B8.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Lý OO',
                    slots: 28,
                    registered: 28,
                },
            ],
        },
    ],

    9: [
        {
            id: '01',
            courseCode: 'THCS303',
            courseName: 'Trí tuệ nhân tạo',
            credits: 3,
            slots: 100,
            registered: 48,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.901',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Mai PP',
                    slots: 100,
                    registered: 48,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 5 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B9.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Vũ QQ',
                    slots: 35,
                    registered: 18,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS303',
            courseName: 'Trí tuệ nhân tạo',
            credits: 3,
            slots: 90,
            registered: 72,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.902',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Trương RR',
                    slots: 90,
                    registered: 72,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS303',
            courseName: 'Trí tuệ nhân tạo',
            credits: 3,
            slots: 85,
            registered: 85,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T7',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.903',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Phan SS',
                    slots: 85,
                    registered: 85,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 2 (Tiết 7 -> 9)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B9.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Huỳnh TT',
                    slots: 30,
                    registered: 30,
                },
            ],
        },
    ],

    10: [
        {
            id: '01',
            courseCode: 'THCS304',
            courseName: 'An toàn thông tin',
            credits: 3,
            slots: 95,
            registered: 40,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1001',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Nguyễn UU',
                    slots: 95,
                    registered: 40,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 4 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B10.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Trần VV',
                    slots: 32,
                    registered: 16,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS304',
            courseName: 'An toàn thông tin',
            credits: 3,
            slots: 88,
            registered: 65,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T4',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1002',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Lê WW',
                    slots: 88,
                    registered: 65,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS304',
            courseName: 'An toàn thông tin',
            credits: 3,
            slots: 80,
            registered: 80,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T6',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1003',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Phạm XX',
                    slots: 80,
                    registered: 80,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B10.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Võ YY',
                    slots: 28,
                    registered: 28,
                },
            ],
        },
    ],

    11: [
        {
            id: '01',
            courseCode: 'THCS401',
            courseName: 'Thực tập dự án',
            credits: 4,
            slots: 80,
            registered: 32,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Sáng (1 -> 4)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1101',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Hoàng ZZ',
                    slots: 80,
                    registered: 32,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 6 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B11.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Đỗ AAA',
                    slots: 25,
                    registered: 10,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS401',
            courseName: 'Thực tập dự án',
            credits: 4,
            slots: 75,
            registered: 58,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Chiều (7 -> 10)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1102',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Bùi BBB',
                    slots: 75,
                    registered: 58,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS401',
            courseName: 'Thực tập dự án',
            credits: 4,
            slots: 70,
            registered: 70,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T7',
                    time: 'Sáng (1 -> 4)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1103',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Ngô CCC',
                    slots: 70,
                    registered: 70,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 7 -> 9)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B11.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Lý DDD',
                    slots: 25,
                    registered: 25,
                },
            ],
        },
    ],

    12: [
        {
            id: '01',
            courseCode: 'THCS402',
            courseName: 'Phân tích dữ liệu lớn',
            credits: 3,
            slots: 90,
            registered: 36,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1201',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'PGS.TS Mai EEE',
                    slots: 90,
                    registered: 36,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 3 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B12.01',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Vũ FFF',
                    slots: 30,
                    registered: 12,
                },
            ],
        },
        {
            id: '02',
            courseCode: 'THCS402',
            courseName: 'Phân tích dữ liệu lớn',
            credits: 3,
            slots: 85,
            registered: 64,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T4',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1202',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Trương GGG',
                    slots: 85,
                    registered: 64,
                },
            ],
            practiceClasses: [],
        },
        {
            id: '03',
            courseCode: 'THCS402',
            courseName: 'Phân tích dữ liệu lớn',
            credits: 3,
            slots: 80,
            registered: 80,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T6',
                    time: 'Chiều (7 -> 9)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.1203',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'TS Phan HHH',
                    slots: 80,
                    registered: 80,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 2 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B12.02',
                    startDate: '01/02/2026',
                    endDate: '30/05/2026',
                    instructor: 'ThS Huỳnh III',
                    slots: 28,
                    registered: 28,
                },
            ],
        },
    ],
};

let selectedCourse = null;
let selectedClass = null;
let registeredClasses = [];

function init() {
    renderCourseTable();
    attachEventHandlers();
}

// table course
function renderCourseTable() {
    const searchText = $('#searchCourse').val().toLowerCase();
    const activeTab = $('.tab-item.active').data('tab');

    const filtered = courses.filter((course) => {
        const matchSearch =
            course.code.includes(searchText) ||
            course.name.toLowerCase().includes(searchText);
        const matchTab = course.type === activeTab;

        // Kiểm tra môn học đã được đăng ký chưa
        const isRegistered = registeredClasses.some(
            (reg) => reg.courseId === course.id,
        );

        // hiển thị các môn chưa đăng ký
        return matchSearch && matchTab && !isRegistered;
    });

    const tbody = $('#courseTable tbody');
    tbody.empty();

    filtered.forEach((course, index) => {
        const statusIcon = course.required
            ? '<span class="status-icon pass">✓</span>'
            : '<span class="status-icon fail">✕</span>';

        let conditionTooltip = '';
        let conditionDisplay = '';

        const prerequisite = course.prerequisiteId
            ? courses.find((c) => c.id === course.prerequisiteId)
            : null;

        if (course.condition === 'A') {
            conditionDisplay = 'A';
            if (prerequisite) {
                conditionTooltip = `
                    <div style="margin-bottom: 10px;">
                        <div style="color: #dc3545; font-weight: bold; margin-bottom: 8px; font-size: 13px;">HỌC PHẦN TIÊN QUYẾT</div>
                        <div style="color: #333; font-size: 12px; line-height: 1.6;">
                            <div style="margin-bottom: 4px; font-weight: 600;">${prerequisite.name}</div>
                            <div style="color: #666; font-size: 11px; margin-bottom: 4px;">Mã học phần: <strong style="color: #333;">${prerequisite.code}</strong></div>
                            <div style="color: #666; font-size: 11px;">Yêu cầu: Đã hoàn thành chương trình</div>
                        </div>
                    </div>
                    <div style="border-top: 1px solid #e8e8e8; padding-top: 10px; color: #666; font-size: 11px; line-height: 1.5;">
                        Bạn <strong style="color: #dc3545;">CHƯA THỂ ĐĂNG KÝ</strong> cho đến khi bạn hoàn thành môn học tiên quyết: <strong style="color: #333;">${prerequisite.name}</strong>
                    </div>
                `;
            }
        } else if (course.condition === 'B') {
            conditionDisplay = 'B';
            if (prerequisite) {
                conditionTooltip = `
                    <div style="margin-bottom: 10px;">
                        <div style="color: #28a745; font-weight: bold; margin-bottom: 8px; font-size: 13px;">HỌC PHẦN HỌC TRƯỚC</div>
                        <div style="color: #333; font-size: 12px; line-height: 1.6;">
                            <div style="margin-bottom: 4px; font-weight: 600;">${prerequisite.name}</div>
                            <div style="color: #666; font-size: 11px; margin-bottom: 4px;">Mã học phần: <strong style="color: #333;">${prerequisite.code}</strong></div>
                            <div style="color: #666; font-size: 11px;">Yêu cầu: Đã hoàn thành chương trình</div>
                        </div>
                    </div>
                    <div style="border-top: 1px solid #e8e8e8; padding-top: 10px; color: #666; font-size: 11px; line-height: 1.5;">
                        Bạn <strong style="color: #28a745;">ĐÃ HỌC</strong> môn học tiên quyết: <strong style="color: #333;">${prerequisite.name}</strong>
                    </div>
                `;
            }
        } else if (course.condition === 'C') {
            conditionDisplay = 'C';
            if (prerequisite) {
                conditionTooltip = `
                    <div style="margin-bottom: 10px;">
                        <div style="color: #1976d2; font-weight: bold; margin-bottom: 8px; font-size: 13px;">HỌC PHẦN SONG HÀNH</div>
                        <div style="color: #333; font-size: 12px; line-height: 1.6;">
                            <div style="margin-bottom: 4px; font-weight: 600;">${prerequisite.name}</div>
                            <div style="color: #666; font-size: 11px; margin-bottom: 4px;">Mã học phần: <strong style="color: #333;">${prerequisite.code}</strong></div>
                            <div style="color: #666; font-size: 11px;">Có thể đăng ký cùng lúc với môn này</div>
                        </div>
                    </div>
                    <div style="border-top: 1px solid #e8e8e8; padding-top: 10px; color: #666; font-size: 11px; line-height: 1.5;">
                        Bạn <strong style="color: #1976d2;">CÓ THỂ ĐĂNG KÝ</strong> môn này cùng lúc với môn: <strong style="color: #333;">${prerequisite.name}</strong>
                    </div>
                `;
            }
        } else {
            conditionDisplay = '-';
        }

        const conditionCell = conditionTooltip
            ? `<div class="condition-cell" data-tooltip-content='${conditionTooltip.replace(/'/g, '&apos;')}'>${conditionDisplay}</div>`
            : conditionDisplay;

        let rowClass = '';
        const row = $(`
                    <tr data-course-id="${course.id}" 
                        class="${rowClass}" 
                        ${conditionTooltip ? `data-row-tooltip='${conditionTooltip.replace(/'/g, '&apos;')}'` : ''}>
                        <td>${index + 1}</td>
                        <td>${course.code}</td>
                        <td>${course.name}</td>
                        <td>${course.credits}</td>
                        <td>${statusIcon}</td>
                        <td>${conditionCell}</td>
                    </tr>
                `);

        row.on('click', function () {
            selectCourse(course);
        });
        row.css('cursor', 'pointer');

        tbody.append(row);
    });

    // tooltip ở cột điều kiện
    $('.condition-cell')
        .off('mouseenter mouseleave')
        .on('mouseenter', function (e) {
            const $cell = $(this);
            const tooltipContent = $cell.attr('data-tooltip-content');

            if (!tooltipContent) return;

            const $tooltip = $('<div class="tooltip"></div>').html(
                tooltipContent,
            );
            $('body').append($tooltip);

            const cellRect = this.getBoundingClientRect();
            const tooltipWidth = 260;
            const tooltipLeft =
                cellRect.left + cellRect.width / 2 - tooltipWidth / 2;
            const tooltipTop = cellRect.top - $tooltip.outerHeight() - 10;

            $tooltip.css({
                position: 'fixed',
                left: tooltipLeft + 'px',
                top: tooltipTop + 'px',
                width: tooltipWidth + 'px',
            });

            setTimeout(() => $tooltip.addClass('show'), 10);
        })
        .on('mouseleave', function () {
            $('.tooltip').removeClass('show');
            setTimeout(() => $('.tooltip').remove(), 200);
        });
}

// Chọn môn học
function selectCourse(course) {
    selectedCourse = course;
    selectedClass = null;

    $('#courseTable tbody tr').removeClass('selected');
    $('#courseTable tbody tr[data-course-id="' + course.id + '"]').addClass(
        'selected',
    );

    // Render lớp học phần
    renderWaitingClasses(course.id);

    // Reset chi tiết
    $('#classDetailContainer').html(`
                <div class="empty-state">
                    <p>Chọn một lớp học phần để xem chi tiết</p>
                </div>
            `);

    // Scroll xuống lớp học phần chờ đăng ký
    setTimeout(() => {
        const waitingSection = $('.two-column');
        if (waitingSection.length) {
            $('html, body').animate(
                {
                    scrollTop: waitingSection.offset().top - 100,
                },
                500,
            );
        }
    }, 100);
}

// lớp học phần chờ đăng ký
function renderWaitingClasses(courseId) {
    const classesForCourse = classes[courseId] || [];
    const tbody = $('#waitingClassBody');
    tbody.empty();

    if (classesForCourse.length === 0) {
        tbody.html(`
                    <tr>
                        <td colspan="2" class="text-center text-muted" style="padding: 30px;">
                            Không có lớp học phần được mở
                        </td>
                    </tr>
                `);
        return;
    }

    classesForCourse.forEach((cls, index) => {
        const course = courses.find((c) => c.id === courseId);
        const available = cls.slots - cls.registered;

        // Trạng thái lớp học phần
        let statusClass = 'ready';
        let statusText = 'Chờ sinh viên đăng ký';
        let canRegister = true; // cho phép đăng ký

        if (available <= 0) {
            statusClass = 'disabled';
            statusText = 'Đã khóa';
            canRegister = false;
        } else if (cls.registered > cls.slots * 0.5) {
            statusClass = 'waiting';
            statusText = 'Đang lên kế hoạch';
            canRegister = false;
        }

        cls.statusClass = statusClass;
        cls.statusText = statusText;
        cls.canRegister = canRegister;

        const row = $(`
                    <tr data-class-id="${cls.id}">
                        <td style="text-align: center;">${index + 1}</td>
                        <td class="class-info">
                            <div><strong>${course.name}</strong></div>
                            <div>Mã lớp học phần: ${course.code}${cls.id}</div>
                            <div>Sĩ số: ${cls.registered}/${cls.slots}</div>
                        </td>
                        <td style="text-align: left;">
                            <span class="status-label ${statusClass}">${statusText}</span>
                        </td>
                    </tr>
                `);

        row.on('click', function () {
            selectClass(courseId, cls.id);
        });

        tbody.append(row);
    });
}

// Chọn lớp học phần
function selectClass(courseId, classId) {
    const cls = classes[courseId].find((c) => c.id === classId);
    selectedClass = { courseId, classId, class: cls };

    $('#waitingClassBody tr').removeClass('selected');
    $('#waitingClassBody tr[data-class-id="' + classId + '"]').addClass(
        'selected',
    );

    // chi tiết
    renderClassDetail(courseId, cls);
}

//chi tiết lớp học phần
function renderClassDetail(courseId, cls) {
    const course = courses.find((c) => c.id === courseId);
    const available = cls.slots - cls.registered;

    // Sử dụng trạng thái từ cls
    let statusClass = cls.statusClass || 'ready';
    let statusText = cls.statusText || 'Chờ sinh viên đăng ký';
    let canRegister = cls.canRegister !== undefined ? cls.canRegister : true;

    // Nếu chưa có trạng thái, tính lại
    if (!cls.statusClass) {
        if (available <= 0) {
            statusClass = 'disabled';
            statusText = 'Đã khóa';
            canRegister = false;
        } else if (cls.registered > cls.slots * 0.5) {
            statusClass = 'waiting';
            statusText = 'Đang lên kế hoạch';
            canRegister = false;
        }
    }

    let html = ``;

    // Hiển thị cảnh báo nếu có thực hành
    if (cls.practiceClasses.length > 0) {
        html += `
                    <div class="alert-box">
                        Lớp học phần có chia nhóm thực hành, vui lòng chọn lịch cố nhóm.
                    </div>
                    `;
    }

    html += `
                <div style="background-color: #F7F8FA; border-radius: 4px; margin-bottom: 20px; margin-top:15px;padding: 15px 0;">
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
                        <div style="text-align: center;">
                            <div style="font-size: 12px; color: var(--text-dark); font-weight: 600; margin-bottom: 5px;">Trạng thái</div>
                            <div style="font-size: 14px; font-weight: bold;">
                                <span class="status-label ${statusClass}">${statusText}</span>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 12px; color: var(--text-dark); font-weight: 600; margin-bottom: 5px;">Nhóm</div>
                            <div id="selectedGroup" style="font-size: 14px; color: var(--text-dark); font-weight: 500;">-</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 12px; color: var(--text-dark); font-weight: 600; margin-bottom: 5px;">Sĩ số tối đa</div>
                            <div style="font-size: 14px; color: var(--text-dark); font-weight: 500;">${cls.slots}</div>
                        </div>
                    </div>
                </div>
            `;

    // Hiển thị lý thuyết
    if (cls.theoryClasses.length > 0) {
        html += `
                    <div class="class-detail">
                        <div class="detail-title">A. LỊCH HỌC LÝ THUYẾT (LT)</div>
                        <div class="table-scroll-detail">
                        <table class="schedule-detail-table">
                            <thead>
                                <tr>
                                    <th>LỊCH HỌC</th>
                                    <th>CƠ SỞ</th>
                                    <th>DÃY NHÀ</th>
                                    <th>PHÒNG</th>
                                    <th>GIẢNG VIÊN</th>
                                    <th>THỜI GIAN HỌC</th>
                                </tr>
                            </thead>
                            <tbody>
                `;

        cls.theoryClasses.forEach((theory, index) => {
            html += `
                        <tr>
                            <td>${theory.day} (${theory.time})</td>
                            <td>${theory.room}</td>
                            <td>X (CS1)</td>
                            <td>X${theory.building}</td>
                            <td>${theory.instructor}</td>
                            <td>${theory.startDate} - ${theory.endDate}</td>
                        </tr>
                    `;
        });

        html += `
                            </tbody>
                        </table>
                        </div>
                    </div>
                `;
    }

    // Hiển thị thực hành nếu có
    if (cls.practiceClasses.length > 0) {
        html += `
                    <div class="class-detail">
                        <div class="detail-title">B. LỊCH HỌC THỰC HÀNH (TH)</div>
                        <div class="table-scroll-detail">
                        <table class="schedule-detail-table">
                            <thead>
                                <tr>
                                    <th style="width: 60px;">CHỌN</th>
                                    <th style="width: 80px;">NHÓM</th>
                                    <th>LỊCH HỌC</th>
                                    <th>CƠ SỞ</th>
                                    <th>DÃY NHÀ</th>
                                    <th>PHÒNG</th>
                                    <th>GIẢNG VIÊN</th>
                                    <th style="width: 80px;">SĨ SỐ</th>
                                </tr>
                            </thead>
                            <tbody>
                `;

        cls.practiceClasses.forEach((practice, index) => {
            const isFull = practice.registered >= practice.slots;
            html += `
                        <tr style="${isFull ? 'opacity: 0.5; background-color: #f5f5f5;' : ''}">
                            <td><input type="radio" name="practice" value="${index}" ${isFull ? 'disabled' : ''} ${index === 0 && !isFull ? 'checked' : ''}></td>
                            <td>${practice.group}</td>
                            <td>${practice.day}</td>
                            <td>${practice.room}</td>
                            <td>B (CS1)</td>
                            <td>${practice.building}</td>
                            <td>${practice.instructor}</td>
                            <td>${practice.registered}/${practice.slots}</td>
                        </tr>
                    `;
        });

        html += `
                            </tbody>
                        </table>
                        </div>
                    </div>
                `;
    }

    html += `
                <button class="btn-register" onclick="registerClass()" ${!canRegister ? 'disabled' : ''}>
                    ĐĂNG KÝ
                </button>

            `;

    $('#classDetailContainer').html(html);

    // event radio cập nhật số nhóm
    $('input[name="practice"]').on('change', function () {
        const selectedIndex = $(this).val();
        const selectedPractice = cls.practiceClasses[selectedIndex];
        if (selectedPractice) {
            $('#selectedGroup').text(selectedPractice.group);
        }
    });

    // Set nhóm mặc định nếu có radio đã chọn
    const checkedRadio = $('input[name="practice"]:checked');
    if (checkedRadio.length > 0) {
        const selectedIndex = checkedRadio.val();
        const selectedPractice = cls.practiceClasses[selectedIndex];
        if (selectedPractice) {
            $('#selectedGroup').text(selectedPractice.group);
        }
    }
}

// Đăng ký lớp học phần
function registerClass() {
    if (!selectedClass) return;

    const courseId = selectedClass.courseId;
    const course = courses.find((c) => c.id === courseId);
    const cls = selectedClass.class;

    // Kiểm tra lớp đã đăng ký
    if (
        registeredClasses.some(
            (r) => r.courseId === courseId && r.classId === cls.id,
        )
    ) {
        alert('Lớp này đã được đăng ký!');
        return;
    }

    // Kiểm tra nếu có thực hành thì phải chọn nhóm
    if (cls.practiceClasses.length > 0) {
        const practiceChoice = $('input[name="practice"]:checked').val();
        if (practiceChoice === undefined) {
            alert('Vui lòng chọn nhóm thực hành trước khi đăng ký!');
            return;
        }
    }

    // Thêm vào danh sách đã đăng ký
    registeredClasses.push({
        courseId: courseId,
        classId: cls.id,
        course: course,
        class: cls,
        registeredDate: new Date().toLocaleDateString('vi-VN'),
        theoryChoice: 0,
        practiceChoice: $('input[name="practice"]:checked').val() || null,
    });

    renderRegisteredTable();

    renderCourseTable();

    selectedClass = null;
    selectedCourse = null;

    $('#courseTable tbody tr').removeClass('selected');

    // reset bảng lớp chờ đăng ký
    $('#waitingClassBody').html(`
                    <tr>
                        <td colspan="3" class="text-center text-muted" style="padding: 30px;">
                            Chọn một môn học để xem danh sách lớp
                        </td>
                    </tr>
                `);

    // reset bảng chi tiết HP
    $('#classDetailContainer').html(`
                    <div class="empty-state">  
                        <p>Chọn một lớp học phần để xem chi tiết</p>
                    </div>
                `);

    alert('Đăng ký lớp học phần thành công!');
}

// bảng đã đăng ký
function renderRegisteredTable() {
    const tbody = $('#registeredTableBody');

    if (registeredClasses.length === 0) {
        tbody.html(`
                    <tr>
                        <td colspan="13" class="text-center text-muted" style="padding: 30px;">
                            Chưa có lớp học phần đã đăng ký
                        </td>
                    </tr>
                `);
        return;
    }

    tbody.empty();

    registeredClasses.forEach((reg, index) => {
        const practiceSchedule =
            reg.practiceChoice !== null
                ? reg.class.practiceClasses[reg.practiceChoice]
                : null;

        const practiceGroup = practiceSchedule ? practiceSchedule.group : '-';

        const row = $(`
                    <tr>
                        <td>${index + 1}</td>
                        <td>${reg.course.code}</td>
                        <td>${reg.course.name}</td>
                        <td>DHKTPM18A</td>
                        <td>${reg.course.credits}</td>
                        <td>${practiceGroup}</td>
                        <td><span class="status-label ready">Đăng ký mới</span></td>
                        <td>${reg.registeredDate}</td>
                        <td>3,380,000</td>
                        <td>30/05/2025</td>
                        <td>Đã thu</td>
                        <td><span class="status-label ready">Chờ sinh viên đăng ký</span></td>
                        <td>
                            <span class="action-icon view" onclick="viewRegistered(${index})" title="Xem"><i class="fa-solid fa-eye"></i></span>
                            <span class="action-icon delete" onclick="deleteRegistered(${index})" title="Xóa"><i class="fa-solid fa-trash"></i></span>
                        </td>
                    </tr>
                `);

        tbody.append(row);
    });
}

// xóa đăng ký
function deleteRegistered(index) {
    if (confirm('Bạn chắc chắn muốn hủy đăng ký lớp này?')) {
        registeredClasses.splice(index, 1);
        renderRegisteredTable();

        renderCourseTable();
    }
}

function viewRegistered(index) {
    const reg = registeredClasses[index];

    let modalHtml = `
        <div class="course-info-header">
            <div class="info-item">
                <label>TÊN MÔN HỌC</label>
                <div class="value">${reg.course.name}</div>
            </div>
            <div class="info-item">
                <label>MÃ MÔN HỌC</label>
                <div class="value">${reg.course.code}</div>
            </div>
            <div class="info-item">
                <label>LỚP HỌC PHẦN</label>
                <div class="value">${reg.class.id}</div>
            </div>
            <div class="info-item">
                <label>SỐ TÍN CHỈ</label>
                <div class="value">${reg.course.credits}</div>
            </div>
            <div class="info-item">
                <label>NGÀY ĐĂNG KÝ</label>
                <div class="value">${reg.registeredDate}</div>
            </div>
        </div>
    `;

    // Bảng lịch học và chi tiết
    modalHtml += `
        <div class="schedule-section-new">
            <h3 class="section-title-new">LỊCH HỌC & CHI TIẾT</h3>
            <table class="schedule-table-new">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>LỊCH HỌC</th>
                        <th>NHÓM</th>
                        <th>PHÒNG</th>
                        <th>DÃY NHÀ</th>
                        <th>CƠ SỞ</th>
                        <th>GIẢNG VIÊN</th>
                        <th>THỜI GIAN</th>
                    </tr>
                </thead>
                <tbody>
    `;

    modalHtml += `
        <tr class="registered-practice-row">
            <td>1</td>
            <td>TH - Thứ 3 (Tiết 1 → 4)</td>
            <td>1</td>
            <td>A.01</td>
            <td>Nhà A</td>
            <td>Cơ sở 1</td>
            <td>TS Nguyễn Văn A</td>
            <td>02/02/2026 - 15/05/2026</td>
        </tr>
    `;

    modalHtml += `
        <tr class="registered-practice-row">
            <td>2</td>
            <td>TH - Thứ 5 (Tiết 1 → 4)</td>
            <td>2</td>
            <td>A.01</td>
            <td>Nhà A</td>
            <td>Cơ sở 1</td>
            <td>TS Nguyễn Văn A</td>
            <td>02/02/2026 - 15/05/2026</td>
        </tr>
    `;

    const hasRegisteredPractice = reg.practiceChoice !== null;
    const row3Class = hasRegisteredPractice ? '' : 'unregistered-row';

    modalHtml += `
        <tr class="${row3Class}">
            <td>3</td>
            <td>LT - Thứ 2 (Tiết 1 → 4)</td>
            <td></td>
            <td>A.01</td>
            <td>Nhà A</td>
            <td>Cơ sở 1</td>
            <td>TS Nguyễn Văn A</td>
            <td>02/02/2026 - 15/05/2026</td>
        </tr>
    `;

    modalHtml += `
                </tbody>
            </table>
        </div>
    `;

    openDetailModal('Chi tiết lớp học phần', modalHtml);
}

// mở modal
function openDetailModal(title, content) {
    const html = `
        <div class="modal-overlay" onclick="closeDetailModal(event)">
            <div class="modal-dialog" onclick="event.stopPropagation();">
                <div class="modal-header">
                    <h3 class="modal-title">${title}</h3>
                    <button onclick="closeDetailModal()" class="modal-close-btn">×</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        </div>

    `;

    $('.modal-overlay').remove();
    $('body').append(html);
}

function closeDetailModal(event) {
    if (event && event.target.classList.contains('modal-overlay')) {
        $('.modal-overlay').fadeOut(200, function () {
            $(this).remove();
        });
    } else if (!event) {
        $('.modal-overlay').fadeOut(200, function () {
            $(this).remove();
        });
    }
}

$(document).keyup(function (e) {
    if (e.key === 'Escape') {
        closeDetailModal();
    }
});

// Gắn sự kiện
function attachEventHandlers() {
    $('#searchCourse').on('input', renderCourseTable);

    $('.tab-item').on('click', function () {
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        renderCourseTable();
    });
}
$(document).ready(init);

// Gắn sự kiện
function attachEventHandlers() {
    $('#searchCourse').on('input', renderCourseTable);

    $('.tab-item').on('click', function () {
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        renderCourseTable();
    });

    $('.mobile-day-tab').on('click', function () {
        $('.mobile-day-tab').removeClass('active');
        $(this).addClass('active');
        const selectedDay = $(this).data('day');
        updateMobileSchedule(selectedDay);
    });
}

$(document).ready(init);
