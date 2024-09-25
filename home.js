// buttons toggle

const donationButton = document.getElementById('donation-btn');
const historyButton = document.getElementById('history-btn');

// buttons bg toggle

historyButton.addEventListener('click', function () {
  historyButton.classList.add('bg-[#B4F461]');
  donationButton.classList.remove('bg-[#B4F461]');
  historyButton.classList.remove('bg-white', 'btn-border');
  donationButton.classList.add('bg-white', 'btn-border');

  // section toggle

  document.getElementById('history-section').classList.remove('hidden');
  document.getElementById('donation-section').classList.add('hidden');
});

donationButton.addEventListener('click', function () {
  donationButton.classList.add('bg-[#B4F461]');
  historyButton.classList.remove('bg-[#B4F461]');
  donationButton.classList.remove('bg-white', 'btn-border');
  historyButton.classList.add('bg-white', 'btn-border');

  // section toggle

  document.getElementById('history-section').classList.add('hidden');
  document.getElementById('donation-section').classList.remove('hidden');
});

// functions

function getInnerByText(id) {
  return document.getElementById(id).innerText;
}

function setInnerById(id, value) {
  document.getElementById(id).innerText = value;
}

// donate button functionality Noakhali

const donateButtonNoahali = document.getElementById('donate-btn-noakhali');

donateButtonNoahali.addEventListener('click', function () {

  // account balance

  const accountBalance = parseFloat(getInnerByText('account-balance'));

  // Noakhali balance

  const noakhaliBalance = parseFloat(getInnerByText('noakhali-balance'));

  const inputNoakhali = document.getElementById('donate-input-noakhali').value;
  const inputNoakhaliNumber = parseFloat(inputNoakhali);

  // Input Validation

  if (
    inputNoakhali === '' ||
    isNaN(inputNoakhaliNumber) ||
    inputNoakhaliNumber <= 0 ||
    inputNoakhaliNumber > accountBalance
  ) {
    alert('Please enter a valid amount');
    return;
  }

  // Update account balance

  const NewNoakhaliBalance = noakhaliBalance + inputNoakhaliNumber;
  setInnerById('noakhali-balance', NewNoakhaliBalance);
  const newAccountBalance = accountBalance - inputNoakhaliNumber;
  setInnerById('account-balance', newAccountBalance);

  // Update history

  const noakhaliTitle = document.getElementById('noakhali-title').innerText;

  // time

  const donateTime = new Date().toLocaleString();
  const historySection = document.getElementById('history-section');
  const newhistoryCardContainer = document.createElement('div');
  newhistoryCardContainer.classList.add(
    'p-8',
    'partha',
    'shadow-md',
    'rounded-2xl'
  );
  newhistoryCardContainer.innerHTML = `
   <h2 class="text-xl font-bold text-[#111]">${inputNoakhaliNumber} TK ${noakhaliTitle}</h2>
    <p class="mt-4 text-base font-light text-[#111]/70">
    Date: ${donateTime}
    </p>
  `;
  historySection.insertBefore(
    newhistoryCardContainer,
    historySection.firstChild
  );

  // Clear input

  document.getElementById('donate-input-noakhali').value = '';

  // Alert modal

  document.getElementById('success-modal').classList.add('modal-open');
  document
    .getElementById('close-modal-btn')
    .addEventListener('click', function () {
      document.getElementById('success-modal').classList.remove('modal-open');
    });
});

// donate button functionality Fenni

const donateButtonFeni = document.getElementById('donate-btn-feni');

donateButtonFeni.addEventListener('click', function () {

  // account balance

  const accountBalance = parseFloat(getInnerByText('account-balance'));

  // Noakhali balance

  const feniBalance = parseFloat(getInnerByText('feni-balance'));

  // Input value

  const inputFeni = document.getElementById('donate-input-feni').value;
  const inputFeniNumber = parseFloat(inputFeni);

  // Input Validation

  if (
    inputFeni === '' ||
    isNaN(inputFeniNumber) ||
    inputFeniNumber <= 0 ||
    inputFeniNumber > accountBalance
  ) {
    alert('Please enter a valid amount');
    return;
  }

  // Update account balance

  const NewFeniBalance = feniBalance + inputFeniNumber;
  setInnerById('feni-balance', NewFeniBalance);
  const newAccountBalance = accountBalance - inputFeniNumber;
  setInnerById('account-balance', newAccountBalance);

  // Update history

  const feniTitle = document.getElementById('feni-title').innerText;

  //  time

  const donateTime = new Date().toLocaleString();
  const historySection = document.getElementById('history-section');
  const newHistoryCardContainer = document.createElement('div');
  newHistoryCardContainer.classList.add(
    'p-8',
    'partha',
    'shadow-md',
    'rounded-2xl'
  );
  newHistoryCardContainer.innerHTML = `
   <h2 class="text-xl font-bold text-[#111]">${inputFeniNumber} TK ${feniTitle}</h2>
    <p class="mt-4 text-base font-light text-[#111]/70">
    Date: ${donateTime}
    </p>
  `;
  historySection.insertBefore(
    newHistoryCardContainer,
    historySection.firstChild
  );

  // Clear input
  document.getElementById('donate-input-feni').value = '';

  // Alert modal
  document.getElementById('success-modal').classList.add('modal-open');
  document
    .getElementById('close-modal-btn')
    .addEventListener('click', function () {
      document.getElementById('success-modal').classList.remove('modal-open');
    });
});

// donate button functionality Quota
const donateButtonQuota = document.getElementById('donate-btn-quota');

donateButtonQuota.addEventListener('click', function () {
  // account balance
  const accountBalance = parseFloat(getInnerByText('account-balance'));

  // Noakhali balance
  const quotaBalance = parseFloat(getInnerByText('quota-balance'));

  // Input value
  const inputQuota = document.getElementById('donate-input-quota').value;
  const inputQuotaNumber = parseFloat(inputQuota);

  // Input Validation
  if (
    inputQuota === '' ||
    isNaN(inputQuotaNumber) ||
    inputQuotaNumber <= 0 ||
    inputQuotaNumber > accountBalance
  ) {
    alert('Please enter a valid amount');
    return;
  }

  // Update account balance
  const NewQuotaBalance = quotaBalance + inputQuotaNumber;
  setInnerById('quota-balance', NewQuotaBalance);
  const newAccountBalance = accountBalance - inputQuotaNumber;
  setInnerById('account-balance', newAccountBalance);

  // Update history
  const quotaTitle = document.getElementById('quota-title').innerText;
  // time
  const donateTime = new Date().toLocaleString();
  const historySection = document.getElementById('history-section');
  const newHistoryCardContainer = document.createElement('div');
  newHistoryCardContainer.classList.add(
    'p-8',
    'partha',
    'shadow-md',
    'rounded-2xl'
  );
  newHistoryCardContainer.innerHTML = `
   <h2 class="text-xl font-bold text-[#111]">${inputQuotaNumber} TK ${quotaTitle}</h2>
    <p class="mt-4 text-base font-light text-[#111]/70">
    Date: ${donateTime}
    </p>
  `;
  historySection.insertBefore(
    newHistoryCardContainer,
    historySection.firstChild
  );

  // Clear input
  document.getElementById('donate-input-quota').value = '';

  // Alert modal
  document.getElementById('success-modal').classList.add('modal-open');
  document
    .getElementById('close-modal-btn')
    .addEventListener('click', function () {
      document.getElementById('success-modal').classList.remove('modal-open');
    });
});
