const dependents = require('dependent-packages')

module.exports = function (pkg) {
  const direct = dependents.directDependents(pkg.name)
  const directDev = dependents.directDevDependents(pkg.name)

  return Promise.resolve(Object.assign(pkg, {
    directDependents: direct,
    directDependentsCount: direct.length,
    directDevDependents: directDev,
    directDevDependentsCount: directDev.length,
    totalDirectDependentsCount: direct.length + directDev.length
  }))
}
