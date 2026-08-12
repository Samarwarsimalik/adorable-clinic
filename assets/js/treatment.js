(function () {
  var treatments = {
    'hair-transplant': {
      category: 'Hair', title: 'Hair Transplant', image: 'assets/images/hair-transplant.jpg',
      intro: 'A personalised hair-restoration consultation focused on hairline planning, donor-area assessment and a treatment plan matched to your pattern of hair loss.',
      who: ['Adults concerned about patterned hair loss or thinning', 'People looking for a long-term hair restoration option', 'Patients who need a professional donor-area and scalp assessment'],
      steps: ['Consultation and scalp assessment', 'Hairline and treatment-area planning', 'Procedure planning based on suitability', 'After-care guidance and scheduled follow-up'],
      note: 'Suitability depends on your scalp condition, donor area, medical history and clinical assessment. Results and recovery timelines vary by individual.'
    },
    'hair-fall': {
      category: 'Hair', title: 'Hair Fall Treatment', image: 'assets/images/consultation.jpg',
      intro: 'A clinician-led approach to understanding hair fall, scalp health and contributing lifestyle or medical factors before planning treatment.',
      who: ['Sudden or gradual hair shedding', 'Weak, thinning or fragile hair', 'Scalp concerns associated with hair fall'],
      steps: ['History and scalp evaluation', 'Identify likely triggers and contributing factors', 'Create a personalised care plan', 'Track progress and adjust the plan when needed'],
      note: 'Hair fall can have several causes. A proper diagnosis is important before choosing a treatment.'
    },
    'hair-regrowth': {
      category: 'Hair', title: 'Hair Regrowth Program', image: 'assets/images/consultation.jpg',
      intro: 'A structured program designed around scalp health, hair density goals and clinically appropriate options selected after consultation.',
      who: ['Early-stage thinning', 'Reduced density', 'People seeking a non-surgical plan before considering transplant'],
      steps: ['Baseline assessment', 'Personalised treatment selection', 'Home-care guidance where appropriate', 'Periodic review and progress tracking'],
      note: 'Hair regrowth response varies significantly between individuals and depends on the underlying cause.'
    },
    'hair-unit': {
      category: 'Hair', title: 'Hair Unit & Non-Surgical Hair Replacement', image: 'assets/images/doctor.jpg',
      intro: 'Non-surgical hair replacement options for people who want an immediate cosmetic improvement without a transplant procedure.',
      who: ['People not suitable for a transplant', 'Advanced hair loss', 'Clients seeking a removable or semi-permanent cosmetic solution'],
      steps: ['Scalp and coverage assessment', 'Select density, texture and style', 'Fitting and blending', 'Maintenance guidance'],
      note: 'Maintenance frequency depends on the chosen hair system and daily routine.'
    },
    'hair-weaving': {
      category: 'Hair', title: 'Hair Weaving & Wigs', image: 'assets/images/doctor.jpg',
      intro: 'Customised hair systems, wigs and weaving options selected to blend naturally with your preferred style and lifestyle.',
      who: ['Temporary or long-term hair loss', 'People wanting a non-medical cosmetic option', 'Clients looking for quick visible coverage'],
      steps: ['Consultation', 'Texture and colour matching', 'Custom fitting', 'Care and maintenance guidance'],
      note: 'Product life and maintenance vary with the material, fitting method and usage.'
    },
    'hair-extension': {
      category: 'Hair', title: 'Hair Extensions', image: 'assets/images/doctor.jpg',
      intro: 'Professional hair-extension consultation for added length or volume with a focus on blending, comfort and hair-care guidance.',
      who: ['Clients wanting more length or volume', 'People seeking a temporary style transformation', 'Clients who can maintain regular extension care'],
      steps: ['Hair quality assessment', 'Shade and texture matching', 'Application method selection', 'Maintenance instructions'],
      note: 'Extensions are not appropriate for every scalp or hair condition. Professional assessment is recommended.'
    },
    'acne-scar': {
      category: 'Skin', title: 'Acne & Acne Scar Treatment', image: 'assets/images/skin-treatment.jpg',
      intro: 'A skin-focused consultation to identify active acne, acne type and scar pattern before selecting a personalised treatment plan.',
      who: ['Active acne', 'Post-acne marks', 'Textural acne scars', 'Recurring breakouts'],
      steps: ['Skin assessment', 'Acne and scar classification', 'Treatment plan using suitable clinical options', 'Home-care and follow-up guidance'],
      note: 'Acne and acne scars often require multiple sessions or a combination approach. Results vary.'
    },
    'pigmentation': {
      category: 'Skin', title: 'Pigmentation & Dark Spot Care', image: 'assets/images/facial-care.jpg',
      intro: 'Targeted evaluation for uneven tone, sun-related pigmentation and dark spots with a plan based on skin type and pigmentation pattern.',
      who: ['Uneven skin tone', 'Sun spots and dark patches', 'Post-inflammatory pigmentation'],
      steps: ['Skin type and pigmentation assessment', 'Identify triggers', 'Select appropriate clinical treatment', 'Sun-care and maintenance plan'],
      note: 'Pigmentation can recur, especially with sun exposure or hormonal triggers. Consistent sun protection is important.'
    },
    'melasma': {
      category: 'Skin', title: 'Melasma Treatment', image: 'assets/images/facial-care.jpg',
      intro: 'A cautious, long-term approach to melasma that considers skin type, sun exposure, triggers and maintenance needs.',
      who: ['Patchy facial pigmentation', 'Recurring melasma', 'People needing a supervised maintenance plan'],
      steps: ['Clinical assessment', 'Trigger and lifestyle review', 'Personalised treatment plan', 'Maintenance and sun-protection guidance'],
      note: 'Melasma commonly requires ongoing management rather than a one-time treatment.'
    },
    'stretch-marks': {
      category: 'Skin', title: 'Stretch Mark Reduction', image: 'assets/images/skin-laser.jpg',
      intro: 'Treatment planning for stretch marks based on their age, colour, depth, location and your skin type.',
      who: ['New or older stretch marks', 'Post-weight-change stretch marks', 'Stretch marks after pregnancy where clinically appropriate'],
      steps: ['Area assessment', 'Discuss realistic goals', 'Select a suitable treatment approach', 'Review progress over multiple sessions'],
      note: 'Stretch marks can often be improved but may not disappear completely.'
    },
    'open-pores': {
      category: 'Skin', title: 'Open Pores & Texture Improvement', image: 'assets/images/skin-treatment.jpg',
      intro: 'A texture-focused skin plan for visibly enlarged pores, roughness and uneven surface appearance.',
      who: ['Visible pores', 'Rough or uneven texture', 'Oil-related texture concerns'],
      steps: ['Skin and pore assessment', 'Select suitable resurfacing or skin-care options', 'Treatment sessions', 'Maintenance guidance'],
      note: 'Pores cannot be permanently “closed,” but their appearance and surrounding skin texture may be improved.'
    },
    'eczema': {
      category: 'Dermatology', title: 'Eczema Consultation', image: 'assets/images/consultation.jpg',
      intro: 'Medical dermatology consultation for itchy, dry, irritated or recurring eczema-like skin concerns.',
      who: ['Recurring dry or inflamed skin', 'Itching and irritation', 'Known eczema needing follow-up'],
      steps: ['Medical history and skin examination', 'Identify likely triggers', 'Treatment and barrier-care plan', 'Follow-up for persistent or recurrent symptoms'],
      note: 'Eczema is a medical condition. Seek prompt medical care for signs of infection, severe swelling or rapidly worsening symptoms.'
    },
    'laser-hair-removal': {
      category: 'Laser', title: 'Laser Hair Reduction', image: 'assets/images/laser-treatment.jpg',
      intro: 'Professional laser hair-reduction planning with treatment parameters selected for the area, hair characteristics and skin type.',
      who: ['Unwanted facial or body hair', 'People looking to reduce frequent shaving or waxing', 'Clients suitable for laser after assessment'],
      steps: ['Skin and hair assessment', 'Patch test when indicated', 'Laser sessions at planned intervals', 'After-care and maintenance guidance'],
      note: 'Laser hair treatment is generally described as hair reduction. Multiple sessions are usually needed and response varies.'
    },
    'full-body-laser': {
      category: 'Laser', title: 'Full Body Laser Hair Reduction', image: 'assets/images/laser-treatment.jpg',
      intro: 'A full-body laser plan built around comfort, safety and realistic expectations, with areas and session timing agreed during consultation.',
      who: ['Clients seeking broad body-hair reduction', 'People wanting a structured multi-area plan', 'Clients who meet safety and suitability criteria'],
      steps: ['Full consultation', 'Area mapping and treatment planning', 'Scheduled treatment sessions', 'Maintenance recommendations'],
      note: 'Some body areas respond differently due to hair thickness, hormones and growth cycles.'
    },
    'tattoo-removal': {
      category: 'Laser', title: 'Laser Tattoo Removal', image: 'assets/images/skin-laser.jpg',
      intro: 'Laser tattoo-removal consultation to evaluate tattoo colour, depth, age and skin type before estimating a treatment plan.',
      who: ['Professional or amateur tattoos', 'People seeking fading for a cover-up', 'Clients with tattoos suitable for laser treatment'],
      steps: ['Tattoo and skin assessment', 'Discuss expected fading and session count', 'Laser sessions with healing intervals', 'After-care guidance'],
      note: 'Complete removal cannot be guaranteed. Some colours and ink types are more resistant than others.'
    },
    'q-switch': {
      category: 'Laser', title: 'Q-Switched Laser', image: 'assets/images/skin-laser.jpg',
      intro: 'A laser consultation for selected pigmentation and tattoo-related concerns where Q-switched technology may be appropriate.',
      who: ['Selected pigmentation concerns', 'Some tattoo colours', 'Clients suitable after dermatologist assessment'],
      steps: ['Assessment', 'Treatment indication confirmation', 'Laser session', 'Post-procedure skin-care guidance'],
      note: 'Not every pigmentation concern should be treated with laser. Diagnosis comes first.'
    },
    'wart-tag': {
      category: 'Laser', title: 'Wart & Skin Tag Removal', image: 'assets/images/consultation.jpg',
      intro: 'Clinical assessment of warts or skin tags followed by a removal approach chosen according to the lesion, location and skin type.',
      who: ['Common warts', 'Skin tags', 'Benign-appearing lesions needing evaluation'],
      steps: ['Examination and diagnosis', 'Discuss removal options', 'Procedure where appropriate', 'Wound-care instructions'],
      note: 'Any changing, bleeding or uncertain skin growth should be medically assessed before cosmetic removal.'
    },
    'anti-aging': {
      category: 'Anti-Aging', title: 'Anti-Aging & Skin Rejuvenation', image: 'assets/images/skin-treatment.jpg',
      intro: 'A personalised rejuvenation plan focused on skin quality, hydration, texture and age-related concerns without a one-size-fits-all approach.',
      who: ['Fine lines and early visible ageing', 'Dull or tired-looking skin', 'Texture and firmness concerns'],
      steps: ['Facial assessment', 'Goal setting', 'Select suitable non-surgical options', 'Maintenance and skin-care plan'],
      note: 'The safest approach depends on your medical history, skin condition and goals. Results vary by treatment and individual.'
    },
    'dermatitis': {
      category: 'Dermatology', title: 'Dermatitis Consultation', image: 'assets/images/consultation.jpg',
      intro: 'Clinical evaluation for inflamed, itchy or irritated skin to distinguish common dermatitis patterns and guide treatment.',
      who: ['Persistent redness or itch', 'Contact-related irritation', 'Recurring dermatitis'],
      steps: ['History and examination', 'Trigger review', 'Treatment plan', 'Follow-up when required'],
      note: 'Seek urgent care for rapidly spreading rash, facial swelling, breathing difficulty or severe systemic symptoms.'
    },
    'psoriasis': {
      category: 'Dermatology', title: 'Psoriasis Consultation', image: 'assets/images/consultation.jpg',
      intro: 'Dermatology consultation for suspected or known psoriasis, including symptom review, examination and a long-term management plan.',
      who: ['Scaly or recurring plaques', 'Known psoriasis requiring review', 'Scalp or body symptoms affecting quality of life'],
      steps: ['Medical assessment', 'Severity and area review', 'Treatment planning', 'Monitoring and long-term care'],
      note: 'Psoriasis is a chronic medical condition and may require ongoing management.'
    },
    'vitiligo': {
      category: 'Dermatology', title: 'Vitiligo Consultation', image: 'assets/images/consultation.jpg',
      intro: 'Specialist consultation for depigmented patches, with evaluation to confirm diagnosis and discuss appropriate management options.',
      who: ['New white or depigmented patches', 'Known vitiligo', 'People needing diagnostic clarification'],
      steps: ['Clinical examination', 'Diagnosis and extent assessment', 'Discuss treatment options', 'Follow-up and monitoring'],
      note: 'Treatment response differs widely. A dermatologist can help set realistic expectations based on type and location.'
    }
  };

  var params = new URLSearchParams(window.location.search);
  var key = params.get('service') || 'acne-scar';
  var item = treatments[key] || treatments['acne-scar'];

  document.querySelectorAll('[data-treatment-title]').forEach(function (el) { el.textContent = item.title; });
  document.querySelectorAll('[data-treatment-category]').forEach(function (el) { el.textContent = item.category; });
  document.querySelectorAll('[data-treatment-intro]').forEach(function (el) { el.textContent = item.intro; });
  document.querySelectorAll('[data-treatment-image]').forEach(function (el) { el.src = item.image; el.alt = item.title + ' at a modern clinic'; });
  document.querySelectorAll('[data-treatment-note]').forEach(function (el) { el.textContent = item.note; });

  var whoList = document.querySelector('[data-treatment-who]');
  if (whoList) {
    whoList.innerHTML = item.who.map(function (x) { return '<li>' + x + '</li>'; }).join('');
  }
  var stepList = document.querySelector('[data-treatment-steps]');
  if (stepList) {
    stepList.innerHTML = item.steps.map(function (x) { return '<li>' + x + '</li>'; }).join('');
  }

  var title = item.title + ' in Delhi | Adorable Clinic';
  document.title = title;
  var desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', item.intro);
})();
