export interface DataProduct {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    category: 'Beras' | 'Minyak' | 'Gula' | 'Telur';
    onClick?: () => void;
    detail?: string; // Properti Opsional 
}

export const data: DataProduct[] = [
    {
        id: "1",
        title: "Beras Pandan Wangi 5kg",
        description: "Beras premium dengan aroma pandan wangi, cocok untuk nasi putih yang pulen.",
        image: "",
        price: 75000,
        category: "Beras"
    },
    {
        id: "2",
        title: "Minyak Goreng Kelapa 2L",
        description: "Minyak goreng sehat dari kelapa murni, bebas kolesterol.",
        image: "",
        price: 35000,
        category: "Minyak"
    },
    {
        id: "3",
        title: "Gula Pasir Halus 1kg",
        description: "Gula pasir halus berkualitas tinggi, cocok untuk berbagai keperluan memasak.",
        image: "",
        price: 15000,
        category: "Gula"
    },
    {
        id: "4",
        title: "Telur Ayam Negeri 1kg",
        description: "Telur ayam negeri segar, kaya protein dan nutrisi.",
        image: "",
        price: 25000,
        category: "Telur"
    },
    {
        id: "5",
        title: "Beras Merah Organik 2kg",
        description: "Beras merah organik, tinggi serat dan baik untuk diet sehat.",
        image: "",
        price: 50000,
        category: "Beras"
    },
    {
        id: "6",
        title: "Minyak Zaitun Extra Virgin 500ml",
        description: "Minyak zaitun extra virgin, kaya antioksidan dan baik untuk jantung.",
        image: "",
        price: 120000,
        category: "Minyak"
    },
    {
        id: "7",
        title: "Gula Merah Aren 500gr",
        description: "Gula merah aren alami, cocok untuk minuman tradisional dan masakan.",
        image: "",
        price: 20000,
        category: "Gula"
    },
    {
        id: "8",
        title: "Telur Bebek Omega-3 1kg",
        description: "Telur bebek kaya omega-3, baik untuk kesehatan otak dan jantung.",
        image: "",
        price: 40000,
        category: "Telur"
    }
];