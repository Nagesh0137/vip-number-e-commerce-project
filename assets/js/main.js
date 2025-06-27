// VIP Numbers E-commerce JavaScript
$(document).ready(function () {
    // Initialize the application
    VipNumbersApp.init();
});

const VipNumbersApp = {
    // Configuration
    config: {
        apiUrl: '', // Will be set for backend integration
        razorpayKey: 'your_razorpay_key_here', // Replace with actual key
        currentLanguage: 'en',
        numbersPerPage: 12,
        currentPage: 1
    },

    // Sample VIP numbers data
    sampleNumbers: [
        { id: 1, number: '+91 99999 88888', category: 'Diamond', price: 50000, numerology: 'Prosperity & Success' },
        { id: 2, number: '+91 88888 77777', category: 'Gold', price: 35000, numerology: 'Wealth & Fortune' },
        { id: 3, number: '+91 77777 66666', category: 'Platinum', price: 45000, numerology: 'Spiritual Growth' },
        { id: 4, number: '+91 99999 00001', category: 'Diamond', price: 60000, numerology: 'Leadership & Power' },
        { id: 5, number: '+91 88888 12345', category: 'Gold', price: 25000, numerology: 'Progressive Energy' },
        { id: 6, number: '+91 77777 11111', category: 'Platinum', price: 40000, numerology: 'New Beginnings' },
        { id: 7, number: '+91 99999 99999', category: 'Diamond', price: 75000, numerology: 'Completion & Fulfillment' },
        { id: 8, number: '+91 88888 88888', category: 'Gold', price: 55000, numerology: 'Material Success' }
    ],

    // Language translations
    translations: {
        en: {
            'exclusive_vip_numbers': 'Exclusive VIP Numbers for Your Prestige',
            'browse_numbers': 'Browse Numbers',
            'gold_numbers': 'Gold Numbers',
            'diamond_numbers': 'Diamond Numbers',
            'platinum_numbers': 'Platinum Numbers',
            'buy_now': 'Buy Now',
            'search_placeholder': 'Search by digits...',
            'price_range': 'Price Range',
            'category': 'Category',
            'numerology': 'Numerology',
            'all_categories': 'All Categories',
            'starting_digits': 'Starting Digits',
            'ending_digits': 'Ending Digits',
            'how_it_works': 'How It Works',
            'select_number': 'Select Your VIP Number',
            'complete_checkout': 'Complete Secure Checkout',
            'port_number': 'Port to Your Network',
            'why_vip_numbers': 'Why Choose VIP Numbers?',
            'instant_recognition': 'Instant Recognition',
            'prestige_value': 'Prestige Value',
            'easy_remember': 'Easy to Remember',
            'contact_us': 'Contact Us',
            'about_us': 'About Us',
            'faq': 'FAQ'
        },
        hi: {
            'exclusive_vip_numbers': 'आपकी प्रतिष्ठा के लिए विशेष वीआईपी नंबर',
            'browse_numbers': 'नंबर देखें',
            'gold_numbers': 'गोल्ड नंबर',
            'diamond_numbers': 'डायमंड नंबर',
            'platinum_numbers': 'प्लेटिनम नंबर',
            'buy_now': 'अभी खरीदें',
            'search_placeholder': 'अंकों से खोजें...',
            'price_range': 'मूल्य सीमा',
            'category': 'श्रेणी',
            'numerology': 'अंकज्योतिष',
            'all_categories': 'सभी श्रेणियां',
            'starting_digits': 'शुरुआती अंक',
            'ending_digits': 'अंतिम अंक',
            'how_it_works': 'यह कैसे काम करता है',
            'select_number': 'अपना वीआईपी नंबर चुनें',
            'complete_checkout': 'सुरक्षित चेकआउट पूरा करें',
            'port_number': 'अपने नेटवर्क में पोर्ट करें',
            'why_vip_numbers': 'वीआईपी नंबर क्यों चुनें?',
            'instant_recognition': 'तुरंत पहचान',
            'prestige_value': 'प्रतिष्ठा मूल्य',
            'easy_remember': 'याद रखने में आसान',
            'contact_us': 'संपर्क करें',
            'about_us': 'हमारे बारे में',
            'faq': 'सामान्य प्रश्न'
        },
        mr: {
            'exclusive_vip_numbers': 'तुमच्या प्रतिष्ठेसाठी विशेष व्हीआयपी नंबर',
            'browse_numbers': 'नंबर पहा',
            'gold_numbers': 'गोल्ड नंबर',
            'diamond_numbers': 'डायमंड नंबर',
            'platinum_numbers': 'प्लॅटिनम नंबर',
            'buy_now': 'आता खरेदी करा',
            'search_placeholder': 'अंकांनी शोधा...',
            'price_range': 'किंमत श्रेणी',
            'category': 'प्रकार',
            'numerology': 'अंकज्योतिष',
            'all_categories': 'सर्व प्रकार',
            'starting_digits': 'सुरुवातीचे अंक',
            'ending_digits': 'शेवटचे अंक',
            'how_it_works': 'हे कसे कार्य करते',
            'select_number': 'तुमचा व्हीआयपी नंबर निवडा',
            'complete_checkout': 'सुरक्षित चेकआउट पूर्ण करा',
            'port_number': 'तुमच्या नेटवर्कमध्ये पोर्ट करा',
            'why_vip_numbers': 'व्हीआयपी नंबर का निवडावे?',
            'instant_recognition': 'तात्काळ ओळख',
            'prestige_value': 'प्रतिष्ठा मूल्य',
            'easy_remember': 'लक्षात ठेवण्यास सोपे',
            'contact_us': 'संपर्क साधा',
            'about_us': 'आमच्याबद्दल',
            'faq': 'सामान्य प्रश्न'
        }
    },

    // Initialize the application
    init: function () {
        this.bindEvents();
        this.setupNavbar();
        this.setupLanguageSelector();
        this.loadFeaturedNumbers();
        this.setupAnimations();
        this.setupSearch();
        this.setupFilters();
    },

    // Bind event listeners
    bindEvents: function () {
        // Language selector
        $('.language-btn').on('click', this.changeLanguage.bind(this));

        // Navigation smooth scroll
        $('a[href^="#"]').on('click', this.smoothScroll);

        // Search functionality
        $('#numberSearch').on('input', this.searchNumbers.bind(this));

        // Filter changes
        $('.filter-control').on('change', this.applyFilters.bind(this));

        // Buy now buttons
        $(document).on('click', '.btn-buy-now', this.openCheckout.bind(this));

        // Number detail view
        $(document).on('click', '.number-card', this.showNumberDetails.bind(this));

        // Window events
        $(window).on('scroll', this.handleScroll.bind(this));
        $(window).on('resize', this.handleResize.bind(this));
    },

    // Setup navbar scroll behavior
    setupNavbar: function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $('.navbar').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }
        });
    },

    // Setup language selector
    setupLanguageSelector: function () {
        const savedLanguage = localStorage.getItem('vip_language') || 'en';
        this.changeLanguage(null, savedLanguage);
    },

    // Change language
    changeLanguage: function (event, language) {
        if (event) {
            event.preventDefault();
            language = $(event.target).data('lang');
        }

        this.config.currentLanguage = language;
        localStorage.setItem('vip_language', language);

        // Update active language button
        $('.language-btn').removeClass('active');
        $(`.language-btn[data-lang="${language}"]`).addClass('active');

        // Update text content
        this.updateLanguageContent();
    },

    // Update content based on selected language
    updateLanguageContent: function () {
        const lang = this.config.currentLanguage;
        const translations = this.translations[lang];

        $('[data-translate]').each(function () {
            const key = $(this).data('translate');
            if (translations[key]) {
                if ($(this).is('input')) {
                    $(this).attr('placeholder', translations[key]);
                } else {
                    $(this).text(translations[key]);
                }
            }
        });
    },

    // Load featured numbers
    loadFeaturedNumbers: function () {
        const featuredNumbers = this.sampleNumbers.slice(0, 6);
        const container = $('#featured-numbers');

        if (container.length) {
            container.empty();
            featuredNumbers.forEach(number => {
                const numberCard = this.createNumberCard(number);
                container.append(numberCard);
            });
        }
    },

    // Create number card HTML
    createNumberCard: function (number) {
        const categoryClass = number.category.toLowerCase() + '-category';
        return `
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="number-card ${categoryClass}" data-number-id="${number.id}">
                    <div class="number-category">${number.category}</div>
                    <div class="number-display">${number.number}</div>
                    <div class="number-price">₹${number.price.toLocaleString()}</div>
                    <div class="mb-3">
                        <small class="text-muted">${number.numerology}</small>
                    </div>
                    <button class="btn btn-primary btn-buy-now w-100" data-number-id="${number.id}">
                        <span data-translate="buy_now">Buy Now</span>
                    </button>
                </div>
            </div>
        `;
    },

    // Setup animations
    setupAnimations: function () {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
            observer.observe(el);
        });
    },

    // Setup search functionality
    setupSearch: function () {
        $('#numberSearch').on('input', debounce((e) => {
            this.searchNumbers(e.target.value);
        }, 300));
    },

    // Search numbers
    searchNumbers: function (query) {
        if (typeof query === 'object') {
            query = $(query.target).val();
        }

        const filteredNumbers = this.sampleNumbers.filter(number =>
            number.number.includes(query) ||
            number.category.toLowerCase().includes(query.toLowerCase()) ||
            number.numerology.toLowerCase().includes(query.toLowerCase())
        );

        this.displayNumbers(filteredNumbers);
    },

    // Setup filters
    setupFilters: function () {
        // Price range slider
        $('#priceRange').on('input', (e) => {
            $('#priceValue').text(`₹${parseInt(e.target.value).toLocaleString()}`);
            this.applyFilters();
        });

        // Category filter
        $('#categoryFilter').on('change', this.applyFilters.bind(this));

        // Starting digits filter
        $('#startingDigits').on('change', this.applyFilters.bind(this));

        // Ending digits filter
        $('#endingDigits').on('change', this.applyFilters.bind(this));
    },

    // Apply all filters
    applyFilters: function () {
        let filteredNumbers = [...this.sampleNumbers];

        // Price filter
        const maxPrice = parseInt($('#priceRange').val());
        filteredNumbers = filteredNumbers.filter(number => number.price <= maxPrice);

        // Category filter
        const category = $('#categoryFilter').val();
        if (category && category !== 'all') {
            filteredNumbers = filteredNumbers.filter(number =>
                number.category.toLowerCase() === category.toLowerCase()
            );
        }

        // Starting digits filter
        const startingDigits = $('#startingDigits').val();
        if (startingDigits) {
            filteredNumbers = filteredNumbers.filter(number =>
                number.number.includes(startingDigits)
            );
        }

        // Ending digits filter
        const endingDigits = $('#endingDigits').val();
        if (endingDigits) {
            filteredNumbers = filteredNumbers.filter(number =>
                number.number.endsWith(endingDigits)
            );
        }

        this.displayNumbers(filteredNumbers);
    },

    // Display filtered numbers
    displayNumbers: function (numbers) {
        const container = $('#numbers-grid');
        if (!container.length) return;

        container.empty();

        if (numbers.length === 0) {
            container.html(`
                <div class="col-12 text-center py-5">
                    <h4>No numbers found</h4>
                    <p class="text-muted">Try adjusting your search criteria</p>
                </div>
            `);
            return;
        }

        numbers.forEach(number => {
            const numberCard = this.createNumberCard(number);
            container.append(numberCard);
        });

        // Update language content for new cards
        this.updateLanguageContent();
    },

    // Show number details (for detail page)
    showNumberDetails: function (event) {
        if ($(event.target).hasClass('btn-buy-now')) return;

        const numberId = $(event.currentTarget).data('number-id');
        const number = this.sampleNumbers.find(n => n.id === numberId);

        if (number) {
            // Store in session for detail page
            sessionStorage.setItem('selectedNumber', JSON.stringify(number));
            // Navigate to detail page (if implemented as separate page)
            // window.location.href = 'number-detail.html';

            // For now, show in modal
            this.showNumberModal(number);
        }
    },

    // Show number details in modal
    showNumberModal: function (number) {
        const modalHtml = `
            <div class="modal fade" id="numberModal" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">VIP Number Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body text-center">
                            <div class="mb-4">
                                <span class="badge bg-primary mb-3">${number.category}</span>
                                <h2 class="display-4 text-gold">${number.number}</h2>
                                <p class="text-muted">${number.numerology}</p>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Price</h5>
                                    <p class="h3 text-gold">₹${number.price.toLocaleString()}</p>
                                </div>
                                <div class="col-md-6">
                                    <h5>Porting</h5>
                                    <p>Available for all networks</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary btn-buy-now" data-number-id="${number.id}">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal
        $('#numberModal').remove();

        // Add new modal
        $('body').append(modalHtml);

        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('numberModal'));
        modal.show();
    },

    // Open checkout process
    openCheckout: function (event) {
        event.preventDefault();
        event.stopPropagation();

        const numberId = $(event.target).data('number-id');
        const number = this.sampleNumbers.find(n => n.id === numberId);

        if (number) {
            this.showCheckoutModal(number);
        }
    },

    // Show checkout modal
    showCheckoutModal: function (number) {
        const modalHtml = `
            <div class="modal fade" id="checkoutModal" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Secure Checkout</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <h6>Customer Information</h6>
                                    <form id="checkoutForm">
                                        <div class="mb-3">
                                            <label class="form-label">Full Name *</label>
                                            <input type="text" class="form-control" id="customerName" required>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Mobile Number *</label>
                                            <input type="tel" class="form-control" id="customerMobile" required>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Email</label>
                                            <input type="email" class="form-control" id="customerEmail">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Current Network</label>
                                            <select class="form-select" id="currentNetwork">
                                                <option value="">Select Network</option>
                                                <option value="airtel">Airtel</option>
                                                <option value="jio">Jio</option>
                                                <option value="vi">Vi (Vodafone Idea)</option>
                                                <option value="bsnl">BSNL</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h6>Order Summary</h6>
                                            <hr>
                                            <div class="d-flex justify-content-between mb-2">
                                                <span>VIP Number:</span>
                                                <strong>${number.number}</strong>
                                            </div>
                                            <div class="d-flex justify-content-between mb-2">
                                                <span>Category:</span>
                                                <span class="badge bg-primary">${number.category}</span>
                                            </div>
                                            <div class="d-flex justify-content-between mb-2">
                                                <span>Price:</span>
                                                <span>₹${number.price.toLocaleString()}</span>
                                            </div>
                                            <div class="d-flex justify-content-between mb-2">
                                                <span>Processing:</span>
                                                <span>Free</span>
                                            </div>
                                            <hr>
                                            <div class="d-flex justify-content-between mb-3">
                                                <strong>Total:</strong>
                                                <strong class="text-gold">₹${number.price.toLocaleString()}</strong>
                                            </div>
                                            <div class="payment-options">
                                                <h6>Payment Options</h6>
                                                <div class="d-flex gap-2 mb-3">
                                                    <img src="https://via.placeholder.com/40x25/0066cc/white?text=UPI" alt="UPI" class="border rounded">
                                                    <img src="https://via.placeholder.com/40x25/1976d2/white?text=Card" alt="Card" class="border rounded">
                                                    <img src="https://via.placeholder.com/40x25/ff9800/white?text=NB" alt="Net Banking" class="border rounded">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onclick="VipNumbersApp.processPayment(${number.id})">
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal
        $('#checkoutModal').remove();

        // Add new modal
        $('body').append(modalHtml);

        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('checkoutModal'));
        modal.show();
    },

    // Process payment (Razorpay integration)
    processPayment: function (numberId) {
        const form = document.getElementById('checkoutForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const number = this.sampleNumbers.find(n => n.id === numberId);
        const customerName = $('#customerName').val();
        const customerMobile = $('#customerMobile').val();
        const customerEmail = $('#customerEmail').val();

        // Razorpay options
        const options = {
            key: this.config.razorpayKey,
            amount: number.price * 100, // Amount in paise
            currency: 'INR',
            name: 'VIP Numbers',
            description: `VIP Number: ${number.number}`,
            order_id: 'order_' + Date.now(), // Replace with actual order ID from backend
            handler: function (response) {
                VipNumbersApp.paymentSuccess(response, number, {
                    name: customerName,
                    mobile: customerMobile,
                    email: customerEmail
                });
            },
            prefill: {
                name: customerName,
                email: customerEmail,
                contact: customerMobile
            },
            theme: {
                color: '#FFD700'
            },
            modal: {
                ondismiss: function () {
                    console.log('Payment cancelled');
                }
            }
        };

        // For demo purposes, simulate successful payment
        setTimeout(() => {
            this.paymentSuccess({
                razorpay_payment_id: 'pay_demo_' + Date.now(),
                razorpay_order_id: 'order_demo_' + Date.now(),
                razorpay_signature: 'sig_demo_' + Date.now()
            }, number, {
                name: customerName,
                mobile: customerMobile,
                email: customerEmail
            });
        }, 2000);

        // Uncomment below for actual Razorpay integration
        // const rzp = new Razorpay(options);
        // rzp.open();
    },

    // Payment success handler
    paymentSuccess: function (response, number, customer) {
        // Close checkout modal
        $('#checkoutModal').modal('hide');

        // Show success modal
        const successHtml = `
            <div class="modal fade" id="successModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body text-center py-5">
                            <div class="mb-4">
                                <i class="fas fa-check-circle text-success" style="font-size: 4rem;"></i>
                            </div>
                            <h4 class="text-success mb-3">Payment Successful!</h4>
                            <p>Thank you for purchasing VIP Number:</p>
                            <h3 class="text-gold mb-3">${number.number}</h3>
                            <p class="text-muted">
                                You will receive porting instructions via SMS and email within 24 hours.
                            </p>
                            <div class="mt-4">
                                <button type="button" class="btn btn-primary me-2" onclick="window.location.reload()">
                                    Browse More Numbers
                                </button>
                                <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        $('body').append(successHtml);
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();

        // Store order details (for backend integration)
        const orderData = {
            payment: response,
            number: number,
            customer: customer,
            timestamp: new Date().toISOString()
        };

        console.log('Order completed:', orderData);

        // Send to backend API
        // this.sendOrderToBackend(orderData);
    },

    // Smooth scroll for navigation
    smoothScroll: function (event) {
        event.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    },

    // Handle scroll events
    handleScroll: function () {
        // Add scroll-based animations or effects here
    },

    // Handle resize events
    handleResize: function () {
        // Add responsive behavior here
    }
};

// Utility function for debouncing
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Initialize tooltips and popovers
$(document).ready(function () {
    // Initialize Bootstrap tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Initialize Bootstrap popovers
    $('[data-bs-toggle="popover"]').popover();
});

// Export for global access
window.VipNumbersApp = VipNumbersApp;

// Newsletter subscription function
function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value;

    if (!email) {
        alert('Please enter your email address');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Simulate newsletter subscription
    const button = document.querySelector('#newsletterEmail + .btn');
    const originalText = button.innerHTML;

    button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Subscribing...';
    button.disabled = true;

    setTimeout(() => {
        alert('Thank you for subscribing! You will receive updates about new VIP numbers.');
        document.getElementById('newsletterEmail').value = '';
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
