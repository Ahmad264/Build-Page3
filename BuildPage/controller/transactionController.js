const User = require('../models/User');
const sendMail = require('../utils/mailer');

exports.submitTransactionId = async (req, res) => {
  const { transactionId, immediateAccess, immediateReject, email: submittedEmail } = req.body;
  try {
    const user = req.user; // comes from protect middleware
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.transactionId = transactionId;
    if (immediateAccess) {
      user.isClub = true;
    }
    if (immediateReject) {
      user.isClub = false;
      await sendMail(
        user.email,
        'Club Membership Rejected',
        'Your club membership request has been rejected due to an invalid transaction ID.'
      );
    }

    await user.save();

    const msg = immediateAccess
      ? 'Access granted'
      : immediateReject
      ? 'Request rejected'
      : 'Transaction ID submitted. Awaiting admin approval.';
    res.json({ message: msg });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.approveClubMember = async (req, res) => {
  const { transactionId } = req.body;
  try {
    const user = await User.findOne({ transactionId });
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.isClub = true;
    await user.save();

    await sendMail(
      user.email,
      'Club Membership Approved',
      'Congratulations! Your club membership has been approved.'
    );

    res.json({ message: 'User approved' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.rejectClubMember = async (req, res) => {
  const { transactionId } = req.body;
  try {
    const user = await User.findOne({ transactionId });
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.isClub = false;
    await user.save();

    await sendMail(
      user.email,
      'Club Membership Rejected',
      'We are sorry to inform you that your club membership was rejected.'
    );

    res.json({ message: 'User rejected' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllClubTransactions = async (req, res) => {
  try {
    const users = await User.find(
      { transactionId: { $nin: [null, ""] } },
      'firstName lastName email transactionId isClub'
    );
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
