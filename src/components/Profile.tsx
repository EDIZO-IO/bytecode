import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, GraduationCap, Building, Edit3, Save, X, Camera, Code } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Profile = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    collegeName: 'Stanford University',
    department: 'Computer Science',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    projects: 12,
    experience: '3+ years'
  });

  const [editForm, setEditForm] = useState(userDetails);

  const handleEdit = () => {
    setIsEditing(true);
    setEditForm(userDetails);
  };

  const handleSave = () => {
    setUserDetails(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(userDetails);
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const stats = [
    { icon: Code, label: 'Projects Completed', value: userDetails.projects, color: 'text-cyan-400' },
    { icon: GraduationCap, label: 'Department', value: userDetails.department, color: 'text-purple-400' },
    { icon: Building, label: 'College', value: userDetails.collegeName, color: 'text-green-400' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              User Profile
            </span>
          </h1>
          <p className="text-xl text-slate-300">Manage your account details and preferences</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-slate-700">
                  <img
                    src={userDetails.avatar}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.button
                  className="absolute bottom-2 right-2 p-2 bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Camera className="h-4 w-4 text-white" />
                </motion.button>
              </div>

              {/* Basic Info */}
              <h2 className="text-2xl font-bold text-white mb-6">{userDetails.name}</h2>

              {/* Stats */}
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3">
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                      <span className="text-slate-300">{stat.label}</span>
                    </div>
                    <span className="font-semibold text-white">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Details Card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">Personal Information</h3>
                <motion.button
                  onClick={handleEdit}
                  className="flex items-center space-x-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Edit3 className="h-4 w-4" />
                  <span>Edit Details</span>
                </motion.button>
              </div>

              {/* Details Form */}
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  ) : (
                    <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                      <User className="h-5 w-5 text-cyan-400" />
                      <span className="text-white">{userDetails.name}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  ) : (
                    <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                      <Mail className="h-5 w-5 text-cyan-400" />
                      <span className="text-white">{userDetails.email}</span>
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  ) : (
                    <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                      <Phone className="h-5 w-5 text-cyan-400" />
                      <span className="text-white">{userDetails.phone}</span>
                    </div>
                  )}
                </div>

                {/* College Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">College Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.collegeName}
                      onChange={(e) => handleInputChange('collegeName', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  ) : (
                    <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                      <Building className="h-5 w-5 text-cyan-400" />
                      <span className="text-white">{userDetails.collegeName}</span>
                    </div>
                  )}
                </div>

                {/* Department */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Department</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  ) : (
                    <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-cyan-400" />
                      <span className="text-white">{userDetails.department}</span>
                    </div>
                  )}
                </div>

              </div>

              {/* Action Buttons */}
              <AnimatePresence>
                {isEditing && (
                  <motion.div
                    className="flex space-x-4 mt-8 pt-6 border-t border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      onClick={handleSave}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Save className="h-4 w-4" />
                      <span>Save Changes</span>
                    </motion.button>
                    <motion.button
                      onClick={handleCancel}
                      className="flex items-center space-x-2 px-6 py-3 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
