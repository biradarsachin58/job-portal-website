const Company = require('../models/companyModel');
const ErrorResponse = require('../utils/errorResponse');
// @desc    Register a new company
// @route   POST /api/companies
// @access  Public
const registerCompany = async (req, res) => {
  const { companyName, location, email, password, confirmPassword } = req.body;

  try {
    const companyExists = await Company.findOne({ email });

    if (companyExists) {
      return res.status(400).json({ message: 'Company already exists' });
    }

    const company = new Company({ companyName, location, email, password, confirmPassword });

    await company.save();
    res.status(201).json({ message: 'Company registered successfully',
      company
     });
  } catch (error) {
    res.status(400).json({ message: error.message});
  }
};

// async function signin(req, res, next) {
    
//   try {
//       const { email, password } = req.body;
//       //validation
//       if(!email){
//           return next(new ErrorResponse("please add an email", 403));
//       }
//       if(!password){
//           return next(new ErrorResponse("please add password", 403));
//       }
//       //check user email
//       const company = await Company.findOne({email});
//       if(!company){
//           return next(new ErrorResponse("invalid credentialsss, 400"));
//       }
//       console.log(`Found company: ${company.email}`);
//       //check user password
//       const isMatched = await company.comparePassword(password);
//       console.log(`password : ${isMatched}`)
//       if(!isMatched){
//           return next(new ErrorResponse("invalid credentialsop, 400"));
//       }

//       sendTokenResponse(company, 200, res);
//   } catch (error) {
//       next(error);
//   }
// } 


async function signin(req, res, next) {
    
  try {
      const { email, password } = req.body;
      //validation
      if(!email){
          return next(new ErrorResponse("please add an email", 403));
      }
      if(!password){
          return next(new ErrorResponse("please add password", 403));
      }
      //check user email
      const company = await Company.findOne({email});
      if(!company){
          return next(new ErrorResponse("invalid credentialsss, 400"));
      }
      console.log(`Found company: ${company.email}`);
      //check user password
      
      //console.log(`password : ${isMatched}`)
      if(password !== company.password){
          return next(new ErrorResponse("invalid credentialsop, 400"));
      }

      sendTokenResponse(company, 200, res);
  } catch (error) {
      next(error);
  }
} 



const sendTokenResponse = async (company, codeStatus, res) => {
  const token = await company.getJwtToken();
  res
  .status(codeStatus)
  .cookie('token', token, {maxAge: 60*60*1000, httpOnly: true})
  .json({ 
      success: true,
      token
      })
}

//logout
function logout(req, res, next) {
  res.clearCookie('token');
  res.status(200).json({
      success: true,
      message: "logged out"
  });
}


const getCompanyDetails = async (req, res, next) => {
  try {
      const companyId = req.company.id; // Assuming company ID is stored in the request after authentication
      const company = await Company.findById(companyId).select('-password');

      if (!company) {
          return res.status(404).json({
              success: false,
              error: 'Company not found'
          });
      }

      res.status(200).json({
          success: true,
          company
      });
  } catch (error) {
      next(error);
  }
};


module.exports = { 
  registerCompany,
  signin,
  logout,
  getCompanyDetails
 };
