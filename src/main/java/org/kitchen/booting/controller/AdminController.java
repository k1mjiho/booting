package org.kitchen.booting.controller;

import org.kitchen.booting.domain.Category;
import org.kitchen.booting.domain.Recipe;
import org.kitchen.booting.domain.Tag;
import org.kitchen.booting.domain.userauth.User;
import org.kitchen.booting.repository.CategoryRepository;
import org.kitchen.booting.repository.RecipeRepository;
import org.kitchen.booting.repository.TagRepository;
import org.kitchen.booting.service.RecipeService;
import org.kitchen.booting.service.TagService;
import org.kitchen.booting.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.swing.text.html.Option;
import java.util.*;

@Controller
@RequestMapping(value = "/admin")
public class AdminController {

    @Autowired
    UserService userService;

    @Autowired
    RecipeRepository recipeRepository;

    @Autowired
    RecipeService recipeService;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    TagService tagService;

    @Autowired
    TagRepository tagRepository;

    private final Logger logger = LoggerFactory.getLogger(AdminController.class);


    @GetMapping("")
    public String index() {
        return "/admin/index";
    }

    @GetMapping("login")
    public String login() {
        return "/admin/login";
    }

    @GetMapping("user/list")
    public String userList(Model model) {
        model.addAttribute("users", userService.findAll());
        return "/admin/user/list";
    }

    @GetMapping("user/get/{userId}")
    public String getUser(@PathVariable("userId") String userId,Model model)
    {
        User user = userService.findByUserId(userId);
        model.addAttribute("getUser", user);
        return "/admin/user/get";
    }

    @GetMapping("user/edit/{userId}")
    public String editUser(@PathVariable("userId") String userId, Model model)
    {
        User user = userService.findByUserId(userId);
        model.addAttribute("user", user);
        return "/admin/user/edit";
    }
    @GetMapping("category/list")
    public String categoryList(Model model)
    {
        List<Category> categoryList = categoryRepository.findAll();
        model.addAttribute("category", categoryList);
        logger.info("@@카테고리리스트@@"+categoryList.toString());
        return "/admin/category/list";
    }
    @GetMapping("category/create")
    public String category(Model model)
    {
        List<Category> categoryList = categoryRepository.findAll();
        model.addAttribute("category", categoryList);
        return "/admin/category/create";
    }
    @GetMapping("category/edit")
    public String editCategory(Model model)
    {
        List<Category> categoryList = categoryRepository.findAll();
        model.addAttribute("category", categoryList);
        model.addAttribute("categories", categoryList);
        return "/admin/category/edit";
    }

    @GetMapping("category/get/{categoryNo}")
    public String getRecipeByCategory(@PathVariable("categoryNo") Long categoryNo, Model model)
    {
        Optional<Category> CategoryNo = categoryRepository.findById(categoryNo);
        if(CategoryNo.isPresent())
        {
            Set<Recipe> recipeList = new HashSet<>();
            Category mainCategory = CategoryNo.get().getMainCategory();

            //매개변수로 받은 카테고리 번호로 레시피 찾기
            List<Recipe> getByCategoryNo = recipeService.findByCategoryNo(CategoryNo.get());
            if(getByCategoryNo!=null){
                getByCategoryNo.forEach(recipe->recipeList.add(recipe));
            }
            //매개변수로 받은 카테고리의 메인 카테고리 레시피도 찾기
            List<Recipe> getByMainCategoryNo = new ArrayList<>();
            getByMainCategoryNo = recipeService.findByCategoryNo(mainCategory);
            if(mainCategory!=null)
            {
                getByMainCategoryNo.forEach(recipe->recipeList.add(recipe));
            }
            model.addAttribute("recipes", recipeList);
        }
        return "/admin/category/get";

    }

    @GetMapping("recipe/list")
    public String getRecipeList(Model model)
    {
        List<Recipe> recipes = recipeService.findAll();
        model.addAttribute("recipes", recipes);
        return "/admin/recipe/list";
    }

    @GetMapping("recipe/{recipeNo}")
    public String getRecipe(@PathVariable("recipeNo") Long recipeNo, Model model)
    {
        Recipe recipe = recipeService.findByRecipeNo(recipeNo);
        if(recipe!=null)
            model.addAttribute("recipe", recipe);
        return "/admin/recipe/get";
    }

    @GetMapping("recipe/edit/{recipeNo}")
    public String editRecipe(@PathVariable("recipeNo") Long recipeNo, Model model)
    {
        Recipe recipe = recipeService.findByRecipeNo(recipeNo);
        if(recipe!=null)
            model.addAttribute("recipe", recipe);
        return "/admin/recipe/edit";
    }

    //태그
    @GetMapping("tag/list")
    public String getTagList(Model model){
        List<Tag> tags = tagService.findAll();
        model.addAttribute("tags",tags);
        return "admin/tag/list";
    }

    @GetMapping("tag/delete/{tagNo}")
    public String deleteTag(@PathVariable("tagNo") Long tagNo){
        tagService.delete(tagNo);
        return "redirect:/admin/tag/list";
    }

    @GetMapping("tag/get/{tagNo}")
    public String getRecipeByTag(@PathVariable("tagNo") Long tagNo, Model model)
    {
        List<Long> includeTag = tagRepository.findRecipeNoByTagNo(tagNo);
        List<Recipe> getByTagNo = new ArrayList<>();
        if((includeTag.isEmpty())==false){
            for (Long recipeNo:includeTag) {
                getByTagNo.add(recipeService.findByRecipeNo(recipeNo));
            }
        }
        model.addAttribute("recipes", getByTagNo);
        return "/admin/tag/get";
    }
    @GetMapping("tag/create")
    public String saveTag(String keyword) {
        Tag tag = new Tag();
        String content = keyword.replaceAll(" ","");
        content = keyword.replaceAll("\\p{Z}","");
        tag.setContent(content);
        if (tagRepository.findByContent(tag.getContent()) != null) {
            Tag oldTag = tagRepository.findByContent(tag.getContent());
            tagRepository.saveAndFlush(oldTag);
        } else {
            tagRepository.saveAndFlush(tag);
        }
        return "redirect:/admin/tag/list";
    }
}